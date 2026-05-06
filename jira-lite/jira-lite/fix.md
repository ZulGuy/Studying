# Jira Lite — Bug Fix Session Log

All bugs found and fixed during the Docker deployment + multi-tenant debugging session.
Each entry explains what broke, why it broke, and what to watch for in the future.

---

## 1. Spring Security — Registered user couldn't log in (403)

**File:** `AuthController.java`  
**Symptom:** Registration succeeded, but immediate login returned 403.  
**Root cause:** `User.active` is a Java `boolean` (primitive). Primitives default to `false`. The `register()` method created a new `User` but never called `setEnabled(true)`. Hibernate used the Java value (`false`) for the INSERT, overriding the PostgreSQL column default (`DEFAULT TRUE`). Spring Security's `DaoAuthenticationProvider` checks `isEnabled()` → `false` → throws `DisabledException` → 403.  
**Fix:** Added `newUser.setEnabled(true)` before `userRepository.save(newUser)`.  
**Lesson:** When a field has a DB-level default, Hibernate still writes the Java-side value. Java `boolean` (primitive) defaults to `false`. Always explicitly set boolean state flags on new entities.

---

## 2. Spring Security filter — Stale JWT crashes filter chain (403)

**File:** `JwtAuthenticationFilter.java`  
**Symptom:** After restarting containers or switching environments, all requests returned 403 even for valid pages.  
**Root cause:** `userDetailsService.loadUserByUsername(username)` threw `UsernameNotFoundException` when the JWT contained a username from a different DB state (e.g., old user deleted, container recreated). The exception was uncaught inside the filter. Spring Security caught it at a higher level and returned 403.  
**Fix:** Wrapped the `loadUserByUsername` call in a `try-catch (UsernameNotFoundException)` that calls `filterChain.doFilter()` and returns — effectively treating the stale JWT as "not authenticated" and letting the request continue to the security layer.  
**Lesson:** Security filters must never let uncaught exceptions propagate. Any exception in `doFilterInternal()` will be swallowed by Spring and surfaced as a generic 403. Always catch expected exceptions and decide explicitly what to do.

---

## 3. Multi-tenancy — `setTenant()` loop exited on first schema mismatch

**File:** `AuthController.java`, `JwtAuthenticationFilter.java`  
**Symptom:** Users from any tenant other than the first schema in `information_schema.schemata` were placed into the `public` schema.  
**Root cause:** The original `setTenant()` loop had the fallback `TenantContext.setTenantId("public")` inside the `else` branch of the loop body:

```java
for (String schema : getAllTenantSchemas()) {
    if (tenant.equals(schema)) {
        TenantContext.setTenantId(tenant);
        return;
    } else {
        TenantContext.setTenantId("public");
        break; // or: else { setTenantId("public") } without return
    }
}
```

`information_schema` is the first schema returned by PostgreSQL. It doesn't match "tennant_03", so the loop immediately set "public" and broke/fell through.

**Fix:** Moved the fallback **after** the loop:

```java
for (String schema : getAllTenantSchemas()) {
    if (tenant.equals(schema) && /* not system schema */) {
        TenantContext.setTenantId(tenant);
        return;
    }
}
TenantContext.setTenantId("public"); // only reached if tenant not found
```

**Lesson:** "Fallback" logic belongs **after** the loop, not inside the loop body. Putting it in the `else` branch means it runs on every non-matching iteration, potentially overwriting a valid result found in an earlier iteration — or short-circuiting before the correct value is checked.

---

## 4. Multi-tenancy — New tenant schema not used during registration

**File:** `TennantServiceImpl.java` + `AuthController.java`  
**Symptom:** Users registered with `user@newTenant` appeared in `public.users` instead of `newTenant.users`.  
**Root cause:** Before `TennantServiceImpl` was wired into `register()`, the new schema did not exist at all when `setTenant()` ran. Without the schema in `information_schema.schemata`, the lookup returned nothing, and `TenantContext` fell back to "public". The user was saved there.  
**Fix:** Call `tennantService.createTennant(tenant)` **before** `setTenant(tenant)` in `register()`.  
**Lesson:** In schema-per-tenant multi-tenancy, the schema must exist **before** you try to resolve the connection context for it. Order matters: create → resolve → save.

---

## 5. Multi-tenancy — Connection pool retains `search_path` between requests

**File:** `SchemaMultiTenantConnectionProvider.java`  
**Symptom:** Rare cross-tenant data bleed; `getAnyConnection()` (used for Hibernate schema validation and sequence generation) could return a connection still set to a previous tenant's schema.  
**Root cause:** `releaseConnection()` called `connection.close()`, but in HikariCP `close()` returns the connection to the pool without resetting state. `search_path` set by a previous tenant's request stayed on the physical connection.  
**Fix:**

```java
public void releaseConnection(String tenantIdentifier, Connection connection) throws SQLException {
    connection.setSchema("public"); // reset before returning to pool
    connection.close();
}
```

**Lesson:** When using a connection pool with per-connection state (like PostgreSQL `search_path`), always reset that state before returning the connection. The pool recycles physical connections — whatever state you leave on them, the next borrower inherits.

---

## 6. Docker — Liquibase never ran, tables missing

**File:** `pom.xml`  
**Symptom:** App started but every DB query failed: `relation "users" does not exist`.  
**Root cause:** `spring.liquibase.enabled=true` was set in `application.properties`, but `liquibase-core` was not in `pom.xml`. Spring Boot autoconfiguration checks for the dependency on the classpath. If it's absent, Liquibase is silently skipped.  
**Fix:** Added to `pom.xml`:

```xml
<dependency>
    <groupId>org.liquibase</groupId>
    <artifactId>liquibase-core</artifactId>
</dependency>
```

**Lesson:** Spring Boot autoconfiguration relies on the dependency being on the classpath. Setting `spring.*.enabled=true` in properties is not enough on its own. If a feature silently does nothing after enabling it, check that its jar is actually present.

---

## 7. Docker — nginx `http {}` wrapper broke the container

**File:** `nginx.conf` (inside `front-end-service/`)  
**Symptom:** nginx container failed to start; `ERR_CONNECTION_REFUSED` on all requests.  
**Root cause:** Files placed in nginx's `conf.d/` directory are `include`-d inside the main `http {}` block of `nginx.conf`. Adding another `http {}` wrapper in the custom config created a nested `http {}` context, which is illegal in nginx. The container crashed on config validation.  
**Fix:** Removed the outer `http {}` wrapper. `limit_req_zone` directives were left at the file's top level (which is valid inside the http context they're included into).  
**Lesson:** nginx `conf.d/*.conf` files must NOT contain `http {}`. They are already inside the http context. Only the `server {}`, `upstream {}`, `map {}`, and `limit_req_zone` directives belong at this level.

---

## 8. Docker — nginx proxy stripped `/api/` prefix from requests

**File:** `nginx.conf`  
**Symptom:** Backend returned 404 for all `/api/` calls even though the backend was running.  
**Root cause:** `proxy_pass http://backend:8080/;` — the trailing slash changes nginx's behavior. With a trailing slash, nginx strips the matched location prefix before forwarding. So a request to `/api/auth/login` was proxied as `/auth/login` (the `/api` part was removed).  
**Fix:** Removed the trailing slash: `proxy_pass http://backend:8080;`  
**Lesson:** `proxy_pass` with a trailing slash strips the location prefix. Without the slash, it preserves the full original URI. Rule of thumb: use no trailing slash when you want to forward the path as-is.

---

## 9. CORS — Browser rejected requests from Docker nginx origin

**File:** `WebConfig.java` (CORS configuration)  
**Symptom:** `POST /api/auth/register` returned 403 when running in Docker (nginx on port 80) but worked locally (port 8080).  
**Root cause:** The CORS allowed origins list had `"http://localhost:80"`. Browsers omit the default port from the `Origin` header: a page on port 80 sends `Origin: http://localhost` (no port). The backend's exact-match check failed.  
**Fix:** Added `"http://localhost"` (no port) alongside `"http://localhost:80"` and `"http://localhost:4200"`.  
**Lesson:** Browsers strip the default port from the `Origin` header (`:80` for HTTP, `:443` for HTTPS). Your CORS allowed-origins list must include the version **without** the port.

---

## 10. Docker — Backend couldn't connect to DB (`db:5432` vs `localhost:5432`)

**File:** `application.properties` + `environment.env`  
**Symptom:** Backend container crashed on startup: `Connection refused: localhost:5432`.  
**Root cause:** `application.properties` had `spring.datasource.url=jdbc:postgresql://localhost:5432/...`. Inside Docker, the DB container is not on `localhost` — it's on the Docker network as the service named `db`.  
**Fix:** Added to `environment.env`:

```
SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/jira_lite
```

Spring Boot's relaxed binding automatically maps `SPRING_DATASOURCE_URL` env var to `spring.datasource.url`. The env file is mounted only in Docker, so local development still uses `localhost`.  
**Lesson:** `localhost` inside a Docker container means "this container", not the host machine or other containers. Use Docker service names for inter-container communication. Use environment variables to override dev vs. Docker values without touching the properties file.

---

## 11. Production build — Angular called backend directly instead of through nginx

**File:** `environment.prod.ts`  
**Symptom:** CORS errors in Docker; frontend made requests to `http://localhost:8080` directly instead of going through nginx.  
**Root cause:** `apiUrl: 'http://localhost:8080'` was hardcoded in the production environment file. In Docker, the Angular app is served by nginx. API calls should go through nginx (`http://localhost/api/...`), which reverse-proxies to the backend.  
**Fix:** Changed to `apiUrl: ''` — relative URLs. `http.get('/api/users')` resolves against the current origin, which is nginx at port 80. nginx then proxies to the backend.  
**Lesson:** Production builds behind a reverse proxy should use relative URLs (`apiUrl: ''`). Hardcoding backend ports in production env files breaks the proxy layer.

---

## 12. Frontend — Hard-coded tenant whitelist blocked dynamic tenants

**File:** `login.component.ts`  
**Symptom:** Users registering with `user@myNewTenant` saw `tenantId: public` logged in the console. Their data appeared mixed with the `public` tenant's data.  
**Root cause:**

```typescript
const tenantId = this.username.includes('@')
    && (this.username.split('@')[1] === 'public'
    || this.username.split('@')[1] === 'tennant_01'
    || this.username.split('@')[1] === 'tennant_02')
    ? this.username.split('@')[1]
    : 'public'; // ← everything not in the list becomes 'public'
```

Only three tenants were allowed. Any dynamically created tenant fell back to `'public'`.  
**Fix:** Removed the whitelist entirely:

```typescript
const tenantId = this.username.includes('@')
    ? this.username.split('@')[1]
    : 'public';
```

**Lesson:** Never hard-code the names of tenants (or any dynamic entities) in client code. If your architecture allows creating new tenants at runtime, the client must extract the tenant name dynamically, not check against a fixed list.

---

## 13. Frontend — SPA navigation after login preserved stale service state

**File:** `login.component.ts`  
**Symptom:** After logging in as a different tenant (e.g., switching from `jack@public` to `admin@tennant_03`), the app showed the previous user's data until a hard browser reload.  
**Root cause:** `this.router.navigateByUrl('/')` is an Angular SPA navigation. It does NOT reload the page. All Angular services stay alive with their previous state. `AuthService.user` still held `jack@public`'s data. Components rendered with the old user until `isAuthenticated()` was called again on the new route.  
**Fix:** Replaced SPA navigation with a full page reload:

```typescript
window.location.href = '/';
```

**Lesson:** Angular services are singletons for the lifetime of the app. Logging in as a different user via SPA navigation does not reset them. When switching users or tenants, use `window.location.href` (hard reload) to guarantee a clean slate. Alternatively, explicitly reset all relevant service state on login.

---

## 14. Frontend — Stale localStorage `recentProject` caused 403 on home page

**File:** `login.component.ts`, `logout.component.ts`  
**Symptom:** After login as a new tenant, the home page showed a "Recently opened" project card from the previous session. Clicking it navigated to a project board that returned 403 errors (the project ID belonged to a different tenant's schema). The user saw a blank board and described it as "I can't see any information".  
**Root cause:** `RecentProjectService` reads/writes `localStorage['recentProject']` without any tenant scoping. After logging out of `jack@public` and logging in as `admin@tennant_03`, the localStorage still had project data from the `public` schema. The home page eagerly displayed this and linked to `/projects/2`, which doesn't exist in `tennant_03.projects`.  
**Fix:** Added `localStorage.removeItem('recentProject')` on login (and `removeItem` for both `recentProject` and `tenantId` on logout).  
**Lesson:** localStorage is global and persists across user sessions. Any data that is tenant-specific or user-specific must be either:
  - Cleared on login/logout, OR
  - Namespaced by tenant/user ID (e.g., key = `recentProject_tennant_03`)

---

## 15. Angular — `ngOnChanges` doesn't fire for signal inputs

**File:** `role-modal.component.ts`  
**Symptom:** Role list in the modal never updated when the parent passed a new user. Adding or removing roles appeared to do nothing.  
**Root cause:** The component used `user = input<ProjectUserDTO>()` (Angular 17+ signal input). Signal inputs do not trigger `ngOnChanges`. The component had lifecycle hooks tied to `ngOnChanges` that were dead code.  
**Fix:**
1. Added a local `WritableSignal`: `displayedRoles = signal<ProjectRole[]>([])`
2. Used `effect(() => this.displayedRoles.set(this.user()?.roles ?? []))` to sync from the signal input
3. All role mutation methods (`addRole`, `removeRole`) read from and write to `displayedRoles`
4. Removed `ngOnChanges`

**Lesson:** Signal inputs (`input<T>()`) and traditional inputs (`@Input()`) behave differently. `ngOnChanges` only fires for `@Input()` decorated properties. For signal inputs, use `effect()` or `computed()` to react to changes.

---

## 16. JPA / @ElementCollection — Deleting one role removed the entire project user

**File:** `ProjectUserServiceImpl.java`  
**Symptom:** Removing a single role from a project user removed the user from the project entirely.  
**Root cause:** `updateRoles()` used `roles.addAll(newRoles)` — it was append-only. The frontend was passing the desired final role set, but the backend was adding that set ON TOP of the existing roles, creating duplicates. The delete logic also wasn't handling the "empty roles → remove user from project" case at all.  
**Fix:** Changed to full replace semantics: clear the old roles, set the new ones. If the new set is empty, delete the `ProjectUser` entirely (JPA cascade handles `project_user_roles`).

```java
Set<ProjectRole> newRoles = dto.getRoles() != null ? dto.getRoles() : new HashSet<>();
if (newRoles.isEmpty()) {
    projectUserRepository.deleteById(pu.getId());
} else {
    pu.setRoles(newRoles);
    projectUserRepository.save(pu);
}
```

**Lesson:** Update operations should use **replace** semantics (set the new value), not **append** semantics (`addAll`). Append semantics are correct for log entries and events, not for current-state fields like a role assignment.

---

## Summary table

| # | File | Category | One-line cause |
|---|------|----------|----------------|
| 1 | `AuthController.java` | Spring Security | Java `boolean` defaults to `false`; `setEnabled(true)` was missing |
| 2 | `JwtAuthenticationFilter.java` | Spring Security | `UsernameNotFoundException` not caught in filter → 403 |
| 3 | `AuthController.java` + Filter | Multi-tenancy | Loop fallback inside `else` branch, not after loop |
| 4 | `TennantServiceImpl` + Controller | Multi-tenancy | Schema created after tenant was resolved (wrong order) |
| 5 | `SchemaMultiTenantConnectionProvider.java` | Multi-tenancy | `search_path` not reset before connection pool return |
| 6 | `pom.xml` | Docker/Spring Boot | `liquibase-core` jar missing; autoconfiguration silently skipped |
| 7 | `nginx.conf` | Docker | `http {}` wrapper illegal inside `conf.d/` |
| 8 | `nginx.conf` | Docker | Trailing slash in `proxy_pass` strips the location prefix |
| 9 | `WebConfig.java` | CORS | Browser omits default port from `Origin`; `:80` must also have no-port variant |
| 10 | `application.properties` | Docker | `localhost` inside container = this container, not other containers |
| 11 | `environment.prod.ts` | Docker | Hard-coded backend port bypasses nginx proxy |
| 12 | `login.component.ts` | Frontend | Tenant name whitelist blocked dynamically created tenants |
| 13 | `login.component.ts` | Frontend | SPA navigation on login preserves stale Angular service state |
| 14 | `login.component.ts` + `logout.component.ts` | Frontend | localStorage not cleared on login/logout → stale cross-tenant data |
| 15 | `role-modal.component.ts` | Angular | Signal inputs don't trigger `ngOnChanges`; use `effect()` instead |
| 16 | `ProjectUserServiceImpl.java` | JPA | `addAll` (append) used instead of replace for role updates |
