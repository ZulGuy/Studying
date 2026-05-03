import {
  ActivatedRoute,
  AddUserModalComponent,
  AllTasksComponent,
  AuthService,
  BaseChartDirective,
  BrowserModule,
  Component,
  DefaultValueAccessor,
  DragDropModule,
  FormsModule,
  HTTP_INTERCEPTORS,
  HttpClient,
  Injectable,
  Input,
  MinLengthValidator,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  NgModule,
  NgSelectOption,
  RecentProjectService,
  ReportsComponent,
  RequiredValidator,
  RoleModalComponent,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  SelectControlValueAccessor,
  SettingsComponent,
  SharedModule,
  TaskService,
  UserService,
  __spreadProps,
  __spreadValues,
  enableProdMode,
  environment,
  platformBrowser,
  provideHttpClient,
  setClassMetadata,
  tap,
  withInterceptorsFromDi,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NPQY6UCU.js";

// src/app/components/topbar/topbar.component.ts
var _c0 = () => ({ exact: true });
function TopbarComponent_a_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1, "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456");
    \u0275\u0275elementEnd();
  }
}
function TopbarComponent_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1, "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430");
    \u0275\u0275elementEnd();
  }
}
var TopbarComponent = class _TopbarComponent {
  constructor(authService) {
    this.authService = authService;
  }
  canManageUsers() {
    return this.authService.isSystemAdmin();
  }
  static {
    this.\u0275fac = function TopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TopbarComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarComponent, selectors: [["app-topbar"]], standalone: false, decls: 12, vars: 4, consts: [[1, "navbar", "navbar-expand", "navbar-dark", "bg-dark", "px-4"], [1, "navbar-nav", "gap-2"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/projects", "routerLinkActive", "active", 1, "nav-link"], ["class", "nav-link", "routerLink", "/users", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "nav-link"], ["class", "nav-link", "routerLink", "/admin/invite", 4, "ngIf"], ["routerLink", "/logout", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/users", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/admin/invite", 1, "nav-link"]], template: function TopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u0413\u043E\u043B\u043E\u0432\u043D\u0430");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "a", 3);
        \u0275\u0275text(5, "\u041F\u0440\u043E\u0454\u043A\u0442\u0438");
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, TopbarComponent_a_6_Template, 2, 0, "a", 4);
        \u0275\u0275elementStart(7, "a", 5);
        \u0275\u0275text(8, "\u041F\u0440\u043E\u0444\u0456\u043B\u044C");
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, TopbarComponent_a_9_Template, 2, 0, "a", 6);
        \u0275\u0275elementStart(10, "a", 7);
        \u0275\u0275text(11, "\u0412\u0438\u0439\u0442\u0438");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(3, _c0));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.canManageUsers());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.canManageUsers());
      }
    }, dependencies: [NgIf, RouterLink, RouterLinkActive], styles: ["\n\n.navbar[_ngcontent-%COMP%] {\n  height: 60px;\n  background-color: #212529;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 8px 12px;\n  border-radius: 4px;\n  color: #ffffff;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background-color: #495057;\n  color: #ffffff;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  background-color: #596275;\n  color: #ffffff;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n  color: #ffffff;\n}\n/*# sourceMappingURL=topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopbarComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-topbar", template: '<nav class="navbar navbar-expand navbar-dark bg-dark px-4">\r\n  <div class="navbar-nav gap-2">\r\n    <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">\u0413\u043E\u043B\u043E\u0432\u043D\u0430</a>\r\n    <a class="nav-link" routerLink="/projects" routerLinkActive="active">\u041F\u0440\u043E\u0454\u043A\u0442\u0438</a>\r\n    <a *ngIf="canManageUsers()" class="nav-link" routerLink="/users" routerLinkActive="active">\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456</a>\r\n    <a class="nav-link" routerLink="/profile" routerLinkActive="active">\u041F\u0440\u043E\u0444\u0456\u043B\u044C</a>\r\n    <a *ngIf="canManageUsers()" class="nav-link"routerLink="/admin/invite">\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430</a>\r\n    <a class="nav-link" routerLink="/logout" routerLinkActive="active">\u0412\u0438\u0439\u0442\u0438</a>\r\n  </div>\r\n</nav>\r\n', styles: ["/* src/app/components/topbar/topbar.component.scss */\n.navbar {\n  height: 60px;\n  background-color: #212529;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.navbar .navbar-nav {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.navbar .navbar-nav .nav-link {\n  font-weight: 500;\n  padding: 8px 12px;\n  border-radius: 4px;\n  color: #ffffff;\n}\n.navbar .navbar-nav .nav-link.active {\n  background-color: #495057;\n  color: #ffffff;\n}\n.navbar .navbar-nav .nav-link:hover {\n  background-color: #596275;\n  color: #ffffff;\n}\n.navbar .navbar-nav .nav-link:focus {\n  color: #ffffff;\n}\n/*# sourceMappingURL=topbar.component.css.map */\n"] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarComponent, { className: "TopbarComponent", filePath: "src/app/components/topbar/topbar.component.ts", lineNumber: 10 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    this.title = "kanban-board-fronts-angular";
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: false, decls: 4, vars: 0, consts: [[1, "layout"], [1, "content"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [RouterOutlet, TopbarComponent], styles: ['\n\n.layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 60px);\n}\n.content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 20px;\n  overflow: auto;\n  background-image: url("./media/background.png");\n}\n/*# sourceMappingURL=app.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-root", template: '<app-topbar></app-topbar>\r\n\r\n<div class="layout">\r\n  <div class="content">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n', styles: ['/* src/app/app.component.scss */\n.layout {\n  display: flex;\n  height: calc(100vh - 60px);\n}\n.content {\n  flex-grow: 1;\n  padding: 20px;\n  overflow: auto;\n  background-image: url("./media/background.png");\n}\n/*# sourceMappingURL=app.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 9 });
})();

// src/app/components/profile/profile.component.ts
var ProfileComponent = class _ProfileComponent {
  constructor(userService) {
    this.userService = userService;
  }
  ngOnInit() {
    this.userService.getCurrentUser().subscribe((u) => this.user = u);
  }
  static {
    this.\u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(UserService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], standalone: false, decls: 17, vars: 7, consts: [[1, "container", "mt-4"], [1, "card", "p-4"], [1, "card-title"], [1, "badge"]], template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "\u041C\u0456\u0439 \u043F\u0440\u043E\u0444\u0456\u043B\u044C");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p")(5, "strong");
        \u0275\u0275text(6, "\u0406\u043C'\u044F:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p")(9, "strong");
        \u0275\u0275text(10, "Email:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p")(13, "strong");
        \u0275\u0275text(14, "\u0421\u0442\u0430\u0442\u0443\u0441:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 3);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ctx.user == null ? null : ctx.user.name, "");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.user == null ? null : ctx.user.email, "");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("bg-success", ctx.user == null ? null : ctx.user.active)("bg-danger", !(ctx.user == null ? null : ctx.user.active));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", (ctx.user == null ? null : ctx.user.active) ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0438\u0439" : "\u041D\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0439", " ");
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-profile", template: `<div class="container mt-4">\r
  <div class="card p-4">\r
    <h2 class="card-title">\u041C\u0456\u0439 \u043F\u0440\u043E\u0444\u0456\u043B\u044C</h2>\r
    <p><strong>\u0406\u043C'\u044F:</strong> {{ user?.name }}</p>\r
    <p><strong>Email:</strong> {{ user?.email }}</p>\r
    <p><strong>\u0421\u0442\u0430\u0442\u0443\u0441:</strong>\r
      <span class="badge" [class.bg-success]="user?.active" [class.bg-danger]="!user?.active">\r
        {{ user?.active ? '\u0410\u043A\u0442\u0438\u0432\u043D\u0438\u0439' : '\u041D\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0439' }}\r
      </span>\r
    </p>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: UserService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/components/profile/profile.component.ts", lineNumber: 11 });
})();

// src/app/components/users/users.component.ts
function UsersComponent_div_0_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "button", 15);
    \u0275\u0275listener("click", function UsersComponent_div_0_tr_28_Template_button_click_11_listener() {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToUser(user_r4.id));
    });
    \u0275\u0275text(12, "\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 16);
    \u0275\u0275listener("click", function UsersComponent_div_0_tr_28_Template_button_click_13_listener() {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteUser(user_r4.id));
    });
    \u0275\u0275text(14, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r4.role === "ROLE_USER" ? "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447" : "\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", user_r4.active ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r4.active ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0438\u0439" : "\u041D\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0439", " ");
  }
}
function UsersComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "h2", 2);
    \u0275\u0275text(2, "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_0_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function UsersComponent_div_0_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterUsers());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "select", 7);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_0_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.usersPerPage, $event) || (ctx_r1.usersPerPage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function UsersComponent_div_0_Template_select_change_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterUsers());
    });
    \u0275\u0275elementStart(8, "option", 8);
    \u0275\u0275text(9, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 8);
    \u0275\u0275text(11, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 8);
    \u0275\u0275text(13, "20");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "table", 9)(15, "thead", 10)(16, "tr")(17, "th");
    \u0275\u0275text(18, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275template(28, UsersComponent_div_0_tr_28_Template, 15, 5, "tr", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 12)(30, "button", 13);
    \u0275\u0275listener("click", function UsersComponent_div_0_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275text(31, "\u2190 \u041D\u0430\u0437\u0430\u0434");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 13);
    \u0275\u0275listener("click", function UsersComponent_div_0_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(35, "\u0412\u043F\u0435\u0440\u0435\u0434 \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.usersPerPage);
    \u0275\u0275advance();
    \u0275\u0275property("value", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 20);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.paginatedUsers);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430 ", ctx_r1.currentPage, " \u0437 ", ctx_r1.totalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
var UsersComponent = class _UsersComponent {
  constructor(userService, router, authService, http) {
    this.userService = userService;
    this.router = router;
    this.authService = authService;
    this.http = http;
    this.users = [];
    this.filteredUsers = [];
    this.paginatedUsers = [];
    this.searchTerm = "";
    this.usersPerPage = 10;
    this.currentPage = 1;
    this.totalPages = 1;
  }
  ngOnInit() {
    this.userService.getAll().subscribe((users) => {
      this.users = users;
      this.filterUsers();
    });
  }
  filterUsers() {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredUsers = this.users.filter((user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term));
    this.currentPage = 1;
    this.updatePagination();
  }
  updatePagination() {
    this.totalPages = Math.ceil(this.filteredUsers.length / this.usersPerPage);
    const start = (this.currentPage - 1) * this.usersPerPage;
    const end = start + this.usersPerPage;
    this.paginatedUsers = this.filteredUsers.slice(start, end);
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }
  goToUser(id) {
    this.router.navigate(["/users", id]);
  }
  canManageUsers() {
    return this.authService.isSystemAdmin();
  }
  deleteUser(id) {
    if (confirm("\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u0435\u0439 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430?")) {
      this.userService.deleteUser(id).subscribe(() => {
        this.ngOnInit();
      });
    }
  }
  resendInvitation(email) {
    this.http.post(`/api/invitations/send?email=${email}`, null).subscribe(() => alert("\u0417\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044F \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E"));
  }
  static {
    this.\u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsersComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], standalone: false, decls: 1, vars: 1, consts: [["class", "container mt-4 users-page", 4, "ngIf"], [1, "container", "mt-4", "users-page"], [1, "mb-3"], [1, "row", "g-3", "mb-3", "filter-bar"], [1, "col-md-6"], ["type", "text", "placeholder", "\u041F\u043E\u0448\u0443\u043A \u0437\u0430 \u0456\u043C'\u044F\u043C", 1, "form-control", "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "col-md-3"], [1, "form-select", "users-per-page-select", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "table", "table-hover", "table-bordered", "user-table"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "pagination-controls", "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "badge", 3, "ngClass"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, UsersComponent_div_0_Template, 36, 10, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.canManageUsers());
      }
    }, dependencies: [NgClass, NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.users-page[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%], \n.users-page[_ngcontent-%COMP%]   .users-per-page-select[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.95rem;\n  border-radius: 6px;\n  transition: box-shadow 0.2s ease;\n}\n.users-page[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus, \n.users-page[_ngcontent-%COMP%]   .users-per-page-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.15rem rgba(13, 110, 253, 0.25);\n}\n.users-page[_ngcontent-%COMP%]   .user-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.users-page[_ngcontent-%COMP%]   .user-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding: 12px;\n}\n.users-page[_ngcontent-%COMP%]   .user-table[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.35rem 0.55rem;\n  border-radius: 0.3rem;\n}\n.users-page[_ngcontent-%COMP%]   .user-table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  transition: all 0.2s ease;\n}\n.users-page[_ngcontent-%COMP%]   .user-table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.users-page[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.8rem;\n  font-size: 0.85rem;\n}\n.users-page[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=users.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-users", template: `<div *ngIf="canManageUsers()" class="container mt-4 users-page">\r
  <h2 class="mb-3">\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456</h2>\r
\r
  <div class="row g-3 mb-3 filter-bar">\r
    <div class="col-md-6">\r
      <input type="text" class="form-control search-input"\r
             [(ngModel)]="searchTerm"\r
             (input)="filterUsers()"\r
             placeholder="\u041F\u043E\u0448\u0443\u043A \u0437\u0430 \u0456\u043C'\u044F\u043C">\r
    </div>\r
    <div class="col-md-3">\r
      <select class="form-select users-per-page-select"\r
              [(ngModel)]="usersPerPage"\r
              (change)="filterUsers()">\r
        <option [value]="5">5</option>\r
        <option [value]="10">10</option>\r
        <option [value]="20">20</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <table class="table table-hover table-bordered user-table">\r
    <thead class="table-light">\r
    <tr>\r
      <th>Username</th>\r
      <th>Email</th>\r
      <th>Role</th>\r
      <th>Status</th>\r
      <th>Action</th>\r
    </tr>\r
    </thead>\r
    <tbody>\r
    <tr *ngFor="let user of paginatedUsers">\r
      <td>{{ user.name }}</td>\r
      <td>{{ user.email }}</td>\r
      <td>\r
        {{ user.role === "ROLE_USER" ? '\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447' : '\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440' }}\r
      </td>\r
      <td>\r
          <span class="badge" [ngClass]="user.active ? 'bg-success' : 'bg-danger'">\r
            {{ user.active ? '\u0410\u043A\u0442\u0438\u0432\u043D\u0438\u0439' : '\u041D\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0439' }}\r
          </span>\r
      </td>\r
      <td>\r
        <button class="btn btn-sm btn-outline-primary" (click)="goToUser(user.id)">\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438</button>\r
        <button class="btn btn-sm btn-danger" (click)="deleteUser(user.id)">\u{1F5D1}\uFE0F</button>\r
      </td>\r
    </tr>\r
    </tbody>\r
  </table>\r
\r
  <div class="pagination-controls d-flex justify-content-between align-items-center mt-3">\r
    <button class="btn btn-outline-secondary" (click)="prevPage()" [disabled]="currentPage === 1">\u2190 \u041D\u0430\u0437\u0430\u0434</button>\r
    <span>\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430 {{ currentPage }} \u0437 {{ totalPages }}</span>\r
    <button class="btn btn-outline-secondary" (click)="nextPage()" [disabled]="currentPage === totalPages">\u0412\u043F\u0435\u0440\u0435\u0434 \u2192</button>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/components/users/users.component.scss */\n.users-page .search-input,\n.users-page .users-per-page-select {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.95rem;\n  border-radius: 6px;\n  transition: box-shadow 0.2s ease;\n}\n.users-page .search-input:focus,\n.users-page .users-per-page-select:focus {\n  outline: none;\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.15rem rgba(13, 110, 253, 0.25);\n}\n.users-page .user-table th,\n.users-page .user-table td {\n  vertical-align: middle;\n  padding: 12px;\n}\n.users-page .user-table .badge {\n  font-size: 0.75rem;\n  padding: 0.35rem 0.55rem;\n  border-radius: 0.3rem;\n}\n.users-page .user-table .btn {\n  font-size: 0.8rem;\n  transition: all 0.2s ease;\n}\n.users-page .user-table .btn:hover {\n  transform: translateY(-1px);\n}\n.users-page .pagination-controls .btn {\n  padding: 0.4rem 0.8rem;\n  font-size: 0.85rem;\n}\n.users-page .pagination-controls span {\n  font-weight: 500;\n}\n/*# sourceMappingURL=users.component.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: Router }, { type: AuthService }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/components/users/users.component.ts", lineNumber: 14 });
})();

// src/app/components/user/user.component.ts
function UserComponent_select_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 5);
    \u0275\u0275twoWayListener("ngModelChange", function UserComponent_select_13_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.user.role, $event) || (ctx_r1.user.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UserComponent_select_13_Template_select_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateRole());
    });
    \u0275\u0275elementStart(1, "option", 6);
    \u0275\u0275text(2, "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 7);
    \u0275\u0275text(4, "\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.user.role);
  }
}
var UserComponent = class _UserComponent {
  constructor(userService, route, authService) {
    this.userService = userService;
    this.route = route;
    this.authService = authService;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.userService.getUserById(Number(id)).subscribe((u) => this.user = u);
  }
  toggleActive() {
    this.userService.toggleActive(this.user.id).subscribe();
  }
  updateRole() {
    this.userService.updateUser(this.user).subscribe({
      next: () => alert("\u0420\u043E\u043B\u044C \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E"),
      error: (err) => alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u0456 \u0440\u043E\u043B\u0456: " + (err?.error?.message || err.message))
    });
  }
  static {
    this.\u0275fac = function UserComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserComponent, selectors: [["app-user"]], standalone: false, decls: 16, vars: 6, consts: [[1, "container", "mt-4"], [1, "card", "p-4"], [1, "badge", 3, "ngClass"], ["class", "form-select mt-2", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "btn", "btn-outline-warning", "mt-2", 3, "click"], [1, "form-select", "mt-2", 3, "ngModelChange", "ngModel"], ["value", "ROLE_USER"], ["value", "ROLE_ADMIN"]], template: function UserComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p")(5, "strong");
        \u0275\u0275text(6, "Email:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p")(9, "strong");
        \u0275\u0275text(10, "\u0421\u0442\u0430\u0442\u0443\u0441:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 2);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, UserComponent_select_13_Template, 5, 1, "select", 3);
        \u0275\u0275elementStart(14, "button", 4);
        \u0275\u0275listener("click", function UserComponent_Template_button_click_14_listener() {
          return ctx.toggleActive();
        });
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.user == null ? null : ctx.user.name);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.user == null ? null : ctx.user.email, "");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", (ctx.user == null ? null : ctx.user.active) ? "bg-success" : "bg-danger");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", (ctx.user == null ? null : ctx.user.active) ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0438\u0439" : "\u041D\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0439", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.authService.isSystemAdmin() && ctx.user);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", (ctx.user == null ? null : ctx.user.active) ? "\u0414\u0435\u0430\u043A\u0442\u0438\u0432\u0443\u0432\u0430\u0442\u0438" : "\u0410\u043A\u0442\u0438\u0432\u0443\u0432\u0430\u0442\u0438", " ");
      }
    }, dependencies: [NgClass, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-user", template: `<div class="container mt-4">\r
  <div class="card p-4">\r
    <h3>{{ user?.name }}</h3>\r
    <p><strong>Email:</strong> {{ user?.email }}</p>\r
    <p>\r
      <strong>\u0421\u0442\u0430\u0442\u0443\u0441:</strong>\r
      <span class="badge" [ngClass]="user?.active ? 'bg-success' : 'bg-danger'">\r
        {{ user?.active ? '\u0410\u043A\u0442\u0438\u0432\u043D\u0438\u0439' : '\u041D\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0439' }}\r
      </span>\r
    </p>\r
    <select [(ngModel)]="user.role" *ngIf="authService.isSystemAdmin() && user" class="form-select mt-2" (ngModelChange)="updateRole()">\r
      <option value="ROLE_USER">\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447</option>\r
      <option value="ROLE_ADMIN">\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440</option>\r
    </select>\r
    <button class="btn btn-outline-warning mt-2" (click)="toggleActive()">\r
      {{ user?.active ? '\u0414\u0435\u0430\u043A\u0442\u0438\u0432\u0443\u0432\u0430\u0442\u0438' : '\u0410\u043A\u0442\u0438\u0432\u0443\u0432\u0430\u0442\u0438' }}\r
    </button>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: UserService }, { type: ActivatedRoute }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserComponent, { className: "UserComponent", filePath: "src/app/components/user/user.component.ts", lineNumber: 13 });
})();

// src/app/components/home-page/home-page.component.ts
var _c02 = (a0) => ["/projects", a0];
function HomePageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h5");
    \u0275\u0275text(2, "\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u043F\u0440\u043E\u0454\u043A\u0442:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "` ");
    \u0275\u0275elementStart(4, "div", 4)(5, "h5", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 7);
    \u0275\u0275text(10, " \u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u043F\u0440\u043E\u0454\u043A\u0442\u0443 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.recentProject.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.recentProject.description);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c02, ctx_r0.recentProject.id));
  }
}
function HomePageComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "\u0412\u0438 \u0449\u0435 \u043D\u0435 \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u043B\u0438 \u0436\u043E\u0434\u0435\u043D \u043F\u0440\u043E\u0454\u043A\u0442.");
    \u0275\u0275elementEnd();
  }
}
var HomePageComponent = class _HomePageComponent {
  constructor(recentProjectService) {
    this.recentProjectService = recentProjectService;
    this.recentProject = null;
  }
  ngOnInit() {
    this.recentProject = this.recentProjectService.getRecentProject();
  }
  static {
    this.\u0275fac = function HomePageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomePageComponent)(\u0275\u0275directiveInject(RecentProjectService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePageComponent, selectors: [["app-home-page"]], standalone: false, decls: 6, vars: 2, consts: [["noRecent", ""], [1, "container", "mt-4"], [1, "mb-3"], [4, "ngIf", "ngIfElse"], [1, "card", "shadow-sm", "p-3"], [1, "card-title"], [1, "card-text", "text-muted"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "routerLink"], [1, "text-muted"]], template: function HomePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "h2", 2);
        \u0275\u0275text(2, "\u0413\u043E\u043B\u043E\u0432\u043D\u0430");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, HomePageComponent_div_3_Template, 11, 5, "div", 3)(4, HomePageComponent_ng_template_4_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const noRecent_r2 = \u0275\u0275reference(5);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.recentProject)("ngIfElse", noRecent_r2);
      }
    }, dependencies: [NgIf, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePageComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-home-page", template: `<div class="container mt-4">\r
  <h2 class="mb-3">\u0413\u043E\u043B\u043E\u0432\u043D\u0430</h2>\r
\r
  <div *ngIf="recentProject; else noRecent">\r
    <h5>\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u043F\u0440\u043E\u0454\u043A\u0442:</h5>\`\r
    <div class="card shadow-sm p-3">\r
      <h5 class="card-title">{{ recentProject.name }}</h5>\r
      <p class="card-text text-muted">{{ recentProject.description }}</p>\r
      <a [routerLink]="['/projects', recentProject.id]" class="btn btn-sm btn-outline-primary">\r
        \u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u043F\u0440\u043E\u0454\u043A\u0442\u0443\r
      </a>\r
    </div>\r
  </div>\r
\r
  <ng-template #noRecent>\r
    <p class="text-muted">\u0412\u0438 \u0449\u0435 \u043D\u0435 \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u043B\u0438 \u0436\u043E\u0434\u0435\u043D \u043F\u0440\u043E\u0454\u043A\u0442.</p>\r
  </ng-template>\r
</div>\r
` }]
  }], () => [{ type: RecentProjectService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePageComponent, { className: "HomePageComponent", filePath: "src/app/components/home-page/home-page.component.ts", lineNumber: 10 });
})();

// src/app/services/comment.service.ts
var CommentService = class _CommentService {
  constructor(http) {
    this.http = http;
    this.api = `${environment.apiUrl}/api/comments`;
  }
  getByTaskId(taskId) {
    return this.http.get(`${this.api}/task/${taskId}`, { withCredentials: true });
  }
  addComment(taskId, description) {
    return this.http.post(this.api, { task: { id: taskId }, description }, { withCredentials: true });
  }
  getCommentsForTask(taskId) {
    return this.http.get(`${this.api}/tasks/${taskId}`, { withCredentials: true });
  }
  addCommentToTask(taskId, description) {
    return this.http.post(
      `${this.api}/tasks/${taskId}`,
      { description },
      // Ось тут! не content, а description
      { withCredentials: true }
    );
  }
  deleteComment(taskId, id) {
    return this.http.delete(`${this.api}/task/${taskId}/${id}`, { withCredentials: true });
  }
  updateComment(taskId, comment) {
    return this.http.put(`${this.api}/task/${taskId}/${comment.id}`, comment, { withCredentials: true });
  }
  static {
    this.\u0275fac = function CommentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommentService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommentService, factory: _CommentService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/task-detail/task-detail.component.ts
function TaskDetailComponent_div_0_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    \u0275\u0275property("value", user_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r3.name);
  }
}
function TaskDetailComponent_div_0_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    \u0275\u0275property("value", user_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r4.name);
  }
}
function TaskDetailComponent_div_0_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function TaskDetailComponent_div_0_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(1, "\u{1F4BE} \u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "textarea", 16);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_div_0_div_26_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newComment, $event) || (ctx_r1.newComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 17);
    \u0275\u0275listener("click", function TaskDetailComponent_div_0_div_26_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addComment());
    });
    \u0275\u0275text(3, "\u0414\u043E\u0434\u0430\u0442\u0438");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newComment);
  }
}
function TaskDetailComponent_div_0_li_28_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 20);
    \u0275\u0275listener("click", function TaskDetailComponent_div_0_li_28_div_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const comment_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editComment(comment_r8));
    });
    \u0275\u0275text(2, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 21);
    \u0275\u0275listener("click", function TaskDetailComponent_div_0_li_28_div_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const comment_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteComment(comment_r8.id));
    });
    \u0275\u0275text(4, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()();
  }
}
function TaskDetailComponent_div_0_li_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 18)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TaskDetailComponent_div_0_li_28_div_5_Template, 5, 0, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comment_r8.authorName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(": ", comment_r8.description, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit);
  }
}
function TaskDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "label", 3);
    \u0275\u0275text(5, "\u041D\u0430\u0437\u0432\u0430 \u0437\u0430\u0434\u0430\u0447\u0456");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_div_0_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.task.summary, $event) || (ctx_r1.task.summary = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 2)(8, "label", 3);
    \u0275\u0275text(9, "\u041E\u043F\u0438\u0441");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 5);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_div_0_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.task.description, $event) || (ctx_r1.task.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "label", 3);
    \u0275\u0275text(14, "Assignee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_div_0_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.task.assigneeId, $event) || (ctx_r1.task.assigneeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(16, TaskDetailComponent_div_0_option_16_Template, 2, 2, "option", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 7)(18, "label", 3);
    \u0275\u0275text(19, "Reporter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_div_0_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.task.initiatorId, $event) || (ctx_r1.task.initiatorId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(21, TaskDetailComponent_div_0_option_21_Template, 2, 2, "option", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, TaskDetailComponent_div_0_button_22_Template, 2, 0, "button", 10);
    \u0275\u0275element(23, "hr");
    \u0275\u0275elementStart(24, "h5");
    \u0275\u0275text(25, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, TaskDetailComponent_div_0_div_26_Template, 4, 1, "div", 11);
    \u0275\u0275elementStart(27, "ul", 12);
    \u0275\u0275template(28, TaskDetailComponent_div_0_li_28_Template, 6, 3, "li", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0417\u0430\u0434\u0430\u0447\u0430 #", ctx_r1.task.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.task.summary);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.task.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.task.assigneeId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.users);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.task.initiatorId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.users);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.canEdit);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.comments);
  }
}
var TaskDetailComponent = class _TaskDetailComponent {
  constructor(route, taskService, userService, commentService, authService) {
    this.route = route;
    this.taskService = taskService;
    this.userService = userService;
    this.commentService = commentService;
    this.authService = authService;
    this.users = [];
    this.comments = [];
    this.newComment = "";
    this.canEdit = false;
  }
  ngOnInit() {
    this.taskId = +this.route.snapshot.paramMap.get("id");
    this.loadTask();
    this.loadUsers();
    this.loadComments();
  }
  loadTask() {
    this.taskService.getTaskById(this.taskId).subscribe((t) => {
      this.task = t;
      this.authService.canEditTask(t.projectId).subscribe((canEdit) => {
        this.canEdit = canEdit;
      });
    });
  }
  loadUsers() {
    this.userService.getAll().subscribe((users) => this.users = users);
  }
  loadComments() {
    this.commentService.getCommentsForTask(this.taskId).subscribe((data) => {
      console.log("\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456 \u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u0430:", data);
      this.comments = data;
    });
  }
  save() {
    this.taskService.updateTask(this.task).subscribe(() => alert("\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E!"));
  }
  addComment() {
    if (!this.newComment.trim())
      return;
    this.commentService.addCommentToTask(this.taskId, this.newComment).subscribe(() => {
      this.newComment = "";
      this.loadComments();
    });
  }
  deleteComment(id) {
    if (confirm("\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u0435\u0439 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440?")) {
      this.commentService.deleteComment(this.taskId, id).subscribe(() => {
        this.loadComments();
      });
    }
  }
  editComment(comment) {
    const updated = prompt("\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440:", comment.description);
    if (updated !== null) {
      this.commentService.updateComment(this.taskId, __spreadProps(__spreadValues({}, comment), { description: updated })).subscribe(() => {
        this.loadComments();
      });
    }
  }
  static {
    this.\u0275fac = function TaskDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TaskDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TaskService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(CommentService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskDetailComponent, selectors: [["app-task-detail"]], standalone: false, decls: 1, vars: 1, consts: [["class", "container mt-4", 4, "ngIf"], [1, "container", "mt-4"], [1, "mb-3"], [1, "form-label", "fw-bold"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mb-3", "row"], [1, "col"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "btn btn-primary me-2", 3, "click", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "list-group"], ["class", "list-group-item d-flex justify-content-between align-items-center", 4, "ngFor", "ngForOf"], [3, "value"], [1, "btn", "btn-primary", "me-2", 3, "click"], ["rows", "2", "placeholder", "\u0417\u0430\u043B\u0438\u0448\u0438\u0442\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-secondary", "mt-2", 3, "click"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-secondary", "me-1", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function TaskDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TaskDetailComponent_div_0_Template, 29, 10, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.task);
      }
    }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskDetailComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-task-detail", template: '<div class="container mt-4" *ngIf="task">\r\n  <h3>\u0417\u0430\u0434\u0430\u0447\u0430 #{{ task.id }}</h3>\r\n\r\n  <div class="mb-3">\r\n    <label class="form-label fw-bold">\u041D\u0430\u0437\u0432\u0430 \u0437\u0430\u0434\u0430\u0447\u0456</label>\r\n    <input class="form-control" [(ngModel)]="task.summary" />\r\n  </div>\r\n\r\n  <div class="mb-3">\r\n    <label class="form-label fw-bold">\u041E\u043F\u0438\u0441</label>\r\n    <textarea class="form-control" rows="3" [(ngModel)]="task.description"></textarea>\r\n  </div>\r\n\r\n  <div class="mb-3 row">\r\n    <div class="col">\r\n      <label class="form-label fw-bold">Assignee</label>\r\n      <select class="form-select" [(ngModel)]="task.assigneeId">\r\n        <option *ngFor="let user of users" [value]="user.id">{{ user.name }}</option>\r\n      </select>\r\n    </div>\r\n    <div class="col">\r\n      <label class="form-label fw-bold">Reporter</label>\r\n      <select class="form-select" [(ngModel)]="task.initiatorId">\r\n        <option *ngFor="let user of users" [value]="user.id">{{ user.name }}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <button *ngIf="canEdit" class="btn btn-primary me-2" (click)="save()">\u{1F4BE} \u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438</button>\r\n\r\n  <hr />\r\n\r\n  <h5>\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456</h5>\r\n  <div *ngIf="canEdit" class="mb-3">\r\n    <textarea class="form-control" [(ngModel)]="newComment" rows="2" placeholder="\u0417\u0430\u043B\u0438\u0448\u0438\u0442\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440..."></textarea>\r\n    <button class="btn btn-secondary mt-2" (click)="addComment()">\u0414\u043E\u0434\u0430\u0442\u0438</button>\r\n  </div>\r\n\r\n  <ul class="list-group">\r\n    <li class="list-group-item d-flex justify-content-between align-items-center" *ngFor="let comment of comments">\r\n      <div>\r\n        <strong>{{ comment.authorName }}</strong>: {{ comment.description }}\r\n      </div>\r\n      <div *ngIf="canEdit">\r\n        <button class="btn btn-sm btn-outline-secondary me-1" (click)="editComment(comment)">\u270F\uFE0F</button>\r\n        <button class="btn btn-sm btn-danger" (click)="deleteComment(comment.id)">\u{1F5D1}\uFE0F</button>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n\r\n</div>\r\n' }]
  }], () => [{ type: ActivatedRoute }, { type: TaskService }, { type: UserService }, { type: CommentService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskDetailComponent, { className: "TaskDetailComponent", filePath: "src/app/components/task-detail/task-detail.component.ts", lineNumber: 14 });
})();

// src/app/components/login/login.component.ts
function LoginComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
var LoginComponent = class _LoginComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.username = "";
    this.password = "";
    this.error = null;
    this.loginFailed = false;
  }
  login() {
    const tenantId = this.username.includes("@") && (this.username.split("@")[1] === "public" || this.username.split("@")[1] === "tennant_01" || this.username.split("@")[1] === "tennant_02") ? this.username.split("@")[1] : "public";
    localStorage.setItem("tenantId", tenantId);
    console.log("tenantId", tenantId);
    this.auth.login({ username: this.username, password: this.password }).subscribe({
      next: () => {
        const redirect = "/";
        this.router.navigateByUrl(redirect);
        this.auth.redirectUrl = null;
      },
      error: () => {
        this.loginFailed = true;
        alert("\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0432\u0430\u0442\u0438\u0441\u044C. \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043B\u043E\u0433\u0456\u043D \u0442\u0430 \u043F\u0430\u0440\u043E\u043B\u044C.");
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: false, decls: 23, vars: 3, consts: [[1, "w-100", "h-100", "d-flex", "justify-content-center", "align-items-center"], [1, "card", "p-4", "shadow", 2, "width", "100%", "max-width", "400px", 3, "ngSubmit"], [1, "text-center", "mb-4"], [1, "mb-3"], ["for", "username", 1, "form-label"], ["name", "username", "id", "username", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "password", 1, "form-label"], ["name", "password", "id", "password", "type", "password", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "text-center", "mt-2"], ["routerLink", "/forgot-password", 1, "text-decoration-none"], ["class", "alert alert-danger mt-3 text-center", 4, "ngIf"], [1, "text-center", "mt-3"], ["routerLink", "/register", 1, "btn", "btn-sm", "btn-outline-secondary", "ms-2"], [1, "alert", "alert-danger", "mt-3", "text-center"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
          return ctx.login();
        });
        \u0275\u0275elementStart(2, "h3", 2);
        \u0275\u0275text(3, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "label", 4);
        \u0275\u0275text(6, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 3)(9, "label", 6);
        \u0275\u0275text(10, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "button", 8);
        \u0275\u0275text(13, "Log In");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "a", 10);
        \u0275\u0275text(16, "\u0417\u0430\u0431\u0443\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, LoginComponent_div_17_Template, 2, 1, "div", 11);
        \u0275\u0275elementStart(18, "div", 12)(19, "span");
        \u0275\u0275text(20, "\u041D\u0435 \u043C\u0430\u0454\u0442\u0435 \u0430\u043A\u0430\u0443\u043D\u0442\u0430?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "a", 13);
        \u0275\u0275text(22, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.username);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.error);
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-login", template: '<div class="w-100 h-100 d-flex justify-content-center align-items-center">\r\n  <form class="card p-4 shadow" style="width: 100%; max-width: 400px;" (ngSubmit)="login()">\r\n    <h3 class="text-center mb-4">Login</h3>\r\n\r\n    <div class="mb-3">\r\n      <label for="username" class="form-label">Username</label>\r\n      <input [(ngModel)]="username" name="username" id="username" class="form-control" required />\r\n    </div>\r\n\r\n    <div class="mb-3">\r\n      <label for="password" class="form-label">Password</label>\r\n      <input [(ngModel)]="password" name="password" id="password" type="password" class="form-control" required />\r\n    </div>\r\n\r\n    <button type="submit" class="btn btn-primary w-100">Log In</button>\r\n\r\n    <div class="text-center mt-2">\r\n      <a routerLink="/forgot-password" class="text-decoration-none">\u0417\u0430\u0431\u0443\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?</a>\r\n    </div>\r\n\r\n    <div *ngIf="error" class="alert alert-danger mt-3 text-center">\r\n      {{ error }}\r\n    </div>\r\n\r\n    <div class="text-center mt-3">\r\n      <span>\u041D\u0435 \u043C\u0430\u0454\u0442\u0435 \u0430\u043A\u0430\u0443\u043D\u0442\u0430?</span>\r\n      <a routerLink="/register" class="btn btn-sm btn-outline-secondary ms-2">\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F</a>\r\n    </div>\r\n  </form>\r\n</div>\r\n' }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/components/login/login.component.ts", lineNumber: 11 });
})();

// src/app/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    return this.authService.isAuthenticated().pipe(tap((isAuth) => {
      if (!isAuth) {
        this.router.navigate(["/login"]);
      }
    }));
  }
  static {
    this.\u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();

// src/app/components/logout/logout.component.ts
var LogoutComponent = class _LogoutComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(["/login"]);
      },
      error: () => this.router.navigate(["/login"])
    });
  }
  static {
    this.\u0275fac = function LogoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LogoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogoutComponent, selectors: [["app-logout"]], standalone: false, decls: 2, vars: 0, template: function LogoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "logout works!");
        \u0275\u0275elementEnd();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogoutComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-logout", template: "<p>logout works!</p>\r\n" }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogoutComponent, { className: "LogoutComponent", filePath: "src/app/components/logout/logout.component.ts", lineNumber: 11 });
})();

// src/app/components/register/register.component.ts
var RegisterComponent = class _RegisterComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.form = {
      username: "",
      email: "",
      password: ""
    };
  }
  submit() {
    this.authService.register(this.form).subscribe({
      next: () => {
        alert("\u2705 Registered!");
        setTimeout(() => this.router.navigate(["/login"]), 100);
      },
      error: (err) => {
        console.error("Register error:", err);
        const msg = typeof err.error === "string" ? err.error : err.error?.message || "Registration failed";
        alert(msg);
      }
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: false, decls: 20, vars: 3, consts: [["f", "ngForm"], [1, "container", "mt-5", 2, "max-width", "500px"], [1, "mb-4", "text-center"], [1, "border", "rounded", "p-4", "shadow-sm", "bg-light", 3, "ngSubmit"], [1, "mb-3"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "name", "username", "required", "", "placeholder", "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0456\u043C'\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "name", "email", "required", "", "placeholder", "\u0412\u0432\u0435\u0434\u0456\u0442\u044C email", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mb-4"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "name", "password", "required", "", "placeholder", "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-primary"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "h2", 2);
        \u0275\u0275text(2, "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "form", 3, 0);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submit());
        });
        \u0275\u0275elementStart(5, "div", 4)(6, "label", 5);
        \u0275\u0275text(7, "\u0406\u043C'\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_8_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.username, $event) || (ctx.form.username = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "label", 7);
        \u0275\u0275text(11, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 9)(14, "label", 10);
        \u0275\u0275text(15, "\u041F\u0430\u0440\u043E\u043B\u044C");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.password, $event) || (ctx.form.password = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 12)(18, "button", 13);
        \u0275\u0275text(19, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.username);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.password);
      }
    }, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-register", template: `<div class="container mt-5" style="max-width: 500px;">\r
  <h2 class="mb-4 text-center">\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F</h2>\r
  <form (ngSubmit)="submit()" #f="ngForm" class="border rounded p-4 shadow-sm bg-light">\r
\r
    <div class="mb-3">\r
      <label for="username" class="form-label">\u0406\u043C'\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430</label>\r
      <input\r
        type="text"\r
        id="username"\r
        class="form-control"\r
        [(ngModel)]="form.username"\r
        name="username"\r
        required\r
        placeholder="\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0456\u043C'\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"\r
      />\r
    </div>\r
\r
    <div class="mb-3">\r
      <label for="email" class="form-label">Email</label>\r
      <input\r
        type="email"\r
        id="email"\r
        class="form-control"\r
        [(ngModel)]="form.email"\r
        name="email"\r
        required\r
        placeholder="\u0412\u0432\u0435\u0434\u0456\u0442\u044C email"\r
      />\r
    </div>\r
\r
    <div class="mb-4">\r
      <label for="password" class="form-label">\u041F\u0430\u0440\u043E\u043B\u044C</label>\r
      <input\r
        type="password"\r
        id="password"\r
        class="form-control"\r
        [(ngModel)]="form.password"\r
        name="password"\r
        required\r
        placeholder="\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C"\r
      />\r
    </div>\r
\r
    <div class="d-grid">\r
      <button type="submit" class="btn btn-primary">\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F</button>\r
    </div>\r
\r
  </form>\r
</div>\r
` }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/components/register/register.component.ts", lineNumber: 10 });
})();

// src/app/components/invite-user/invite-user.component.ts
function InviteUserComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.message);
  }
}
var InviteUserComponent = class _InviteUserComponent {
  constructor(http) {
    this.http = http;
    this.email = "";
    this.message = "";
    this.api = `${environment.apiUrl}/api`;
  }
  sendInvitation() {
    if (!this.email.trim())
      return;
    this.http.post(`${this.api}/invitations/send?email=${this.email}`, null, { withCredentials: true }).subscribe({
      next: () => {
        this.message = "\u0417\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044F \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E!";
        this.email = "";
      },
      error: (err) => {
        this.message = "\u041F\u043E\u043C\u0438\u043B\u043A\u0430: " + (err.error || "\u043D\u0435\u0432\u0456\u0434\u043E\u043C\u043E");
      }
    });
  }
  static {
    this.\u0275fac = function InviteUserComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InviteUserComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InviteUserComponent, selectors: [["app-invite-user"]], standalone: false, decls: 7, vars: 2, consts: [[1, "container", "mt-4"], ["type", "email", "placeholder", "Email \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430", 1, "form-control", "mb-2", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click"], ["class", "mt-2 text-success", 4, "ngIf"], [1, "mt-2", "text-success"]], template: function InviteUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "input", 1);
        \u0275\u0275twoWayListener("ngModelChange", function InviteUserComponent_Template_input_ngModelChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275listener("click", function InviteUserComponent_Template_button_click_4_listener() {
          return ctx.sendInvitation();
        });
        \u0275\u0275text(5, "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438");
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, InviteUserComponent_p_6_Template, 2, 1, "p", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.message);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InviteUserComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-invite-user", template: '<div class="container mt-4">\r\n  <h2>\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430</h2>\r\n\r\n  <input [(ngModel)]="email" type="email" class="form-control mb-2" placeholder="Email \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430" />\r\n\r\n  <button class="btn btn-primary" (click)="sendInvitation()">\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438</button>\r\n\r\n  <p class="mt-2 text-success" *ngIf="message">{{ message }}</p>\r\n</div>\r\n' }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviteUserComponent, { className: "InviteUserComponent", filePath: "src/app/components/invite-user/invite-user.component.ts", lineNumber: 10 });
})();

// src/app/components/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_form_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ForgotPasswordComponent_form_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 3);
    \u0275\u0275listener("submit", function ForgotPasswordComponent_form_3_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.submit();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(1, "div", 4)(2, "label", 5);
    \u0275\u0275text(3, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_form_3_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275text(6, "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ForgotPasswordComponent_form_3_div_7_Template, 2, 1, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.error);
  }
}
function ForgotPasswordComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, " \u{1F4E9} \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0441\u0432\u043E\u044E \u043F\u043E\u0448\u0442\u0443 \u2014 \u043C\u0438 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043B\u0438 \u0456\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457 \u0434\u043B\u044F \u0441\u043A\u0438\u0434\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u043B\u044F. ");
    \u0275\u0275elementEnd();
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(authService) {
    this.authService = authService;
    this.email = "";
    this.success = false;
    this.error = "";
  }
  submit() {
    this.authService.forgotPassword(this.email).subscribe({
      next: () => this.success = true,
      error: (err) => this.error = err.error || "\u0421\u0442\u0430\u043B\u0430\u0441\u044C \u043F\u043E\u043C\u0438\u043B\u043A\u0430. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437."
    });
  }
  static {
    this.\u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], standalone: false, decls: 5, vars: 2, consts: [[1, "container", "mt-5"], [3, "submit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [3, "submit"], [1, "mb-3"], [1, "form-label"], ["name", "email", "type", "email", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "text-danger mt-2", 4, "ngIf"], [1, "text-danger", "mt-2"], [1, "alert", "alert-success"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h4");
        \u0275\u0275text(2, "\u{1F511} \u0417\u0430\u0431\u0443\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, ForgotPasswordComponent_form_3_Template, 8, 2, "form", 1)(4, ForgotPasswordComponent_div_4_Template, 2, 0, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.success);
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-forgot-password", template: '<div class="container mt-5">\n  <h4>\u{1F511} \u0417\u0430\u0431\u0443\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?</h4>\n\n  <form (submit)="submit(); $event.preventDefault()" *ngIf="!success">\n    <div class="mb-3">\n      <label class="form-label">Email</label>\n      <input [(ngModel)]="email" name="email" class="form-control" type="email" required />\n    </div>\n    <button class="btn btn-primary" type="submit">\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F</button>\n    <div class="text-danger mt-2" *ngIf="error">{{ error }}</div>\n  </form>\n\n  <div *ngIf="success" class="alert alert-success">\n    \u{1F4E9} \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0441\u0432\u043E\u044E \u043F\u043E\u0448\u0442\u0443 \u2014 \u043C\u0438 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043B\u0438 \u0456\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457 \u0434\u043B\u044F \u0441\u043A\u0438\u0434\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u043B\u044F.\n  </div>\n</div>\n' }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/components/forgot-password/forgot-password.component.ts", lineNumber: 9 });
})();

// src/app/components/reset-password/reset-password.component.ts
function ResetPasswordComponent_form_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ResetPasswordComponent_form_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 3);
    \u0275\u0275listener("submit", function ResetPasswordComponent_form_3_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.submit();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(1, "div", 4)(2, "label", 5);
    \u0275\u0275text(3, "\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function ResetPasswordComponent_form_3_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPassword, $event) || (ctx_r1.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275text(6, "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ResetPasswordComponent_form_3_div_7_Template, 2, 1, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPassword);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.error);
  }
}
function ResetPasswordComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, " \u2705 \u041F\u0430\u0440\u043E\u043B\u044C \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u043C\u0456\u043D\u0435\u043D\u043E. \u041F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0454\u043C\u043E \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443 \u0432\u0445\u043E\u0434\u0443... ");
    \u0275\u0275elementEnd();
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  constructor(route, auth, router) {
    this.route = route;
    this.auth = auth;
    this.router = router;
    this.token = "";
    this.newPassword = "";
    this.success = null;
    this.error = null;
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.token = params.get("token") || "";
    });
  }
  submit() {
    if (!this.token) {
      this.error = "\u0422\u043E\u043A\u0435\u043D \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0432 url";
      return;
    }
    this.auth.resetPassword(this.token, this.newPassword).subscribe({
      next: () => {
        this.success = "\u041F\u0430\u0440\u043E\u043B\u044C \u0437\u043C\u0456\u043D\u0435\u043D\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E!";
        setTimeout(() => this.router.navigate(["/login"]), 3e3);
      },
      error: (err) => {
        this.error = err.error?.message || "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C";
      }
    });
  }
  static {
    this.\u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], standalone: false, decls: 5, vars: 2, consts: [[1, "container", "mt-5"], [3, "submit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [3, "submit"], [1, "mb-3"], [1, "form-label"], ["name", "newPassword", "type", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-success"], ["class", "text-danger mt-2", 4, "ngIf"], [1, "text-danger", "mt-2"], [1, "alert", "alert-success"]], template: function ResetPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h4");
        \u0275\u0275text(2, "\u{1F510} \u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u043D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, ResetPasswordComponent_form_3_Template, 8, 2, "form", 1)(4, ResetPasswordComponent_div_4_Template, 2, 0, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.success);
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-reset-password", template: '<div class="container mt-5">\n  <h4>\u{1F510} \u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u043D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C</h4>\n\n  <form (submit)="submit(); $event.preventDefault()" *ngIf="!success">\n    <div class="mb-3">\n      <label class="form-label">\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C</label>\n      <input [(ngModel)]="newPassword" name="newPassword" class="form-control" type="password" required minlength="6" />\n    </div>\n    <button class="btn btn-success" type="submit">\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438</button>\n    <div class="text-danger mt-2" *ngIf="error">{{ error }}</div>\n  </form>\n\n  <div *ngIf="success" class="alert alert-success">\n    \u2705 \u041F\u0430\u0440\u043E\u043B\u044C \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u043C\u0456\u043D\u0435\u043D\u043E. \u041F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0454\u043C\u043E \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443 \u0432\u0445\u043E\u0434\u0443...\n  </div>\n</div>\n' }]
  }], () => [{ type: ActivatedRoute }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/components/reset-password/reset-password.component.ts", lineNumber: 10 });
})();

// src/app/app-routing.module.ts
var routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "reset-password", component: ResetPasswordComponent },
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      { path: "", component: HomePageComponent, pathMatch: "full" },
      {
        path: "projects",
        loadChildren: () => import("./chunk-EUCXN6WZ.js").then((m) => m.ProjectsModule)
      },
      { path: "task/:id", component: TaskDetailComponent },
      { path: "users", component: UsersComponent },
      { path: "users/:id", component: UserComponent },
      { path: "profile", component: ProfileComponent },
      { path: "admin/invite", component: InviteUserComponent },
      { path: "logout", component: LogoutComponent }
    ]
  },
  { path: "**", redirectTo: "" }
  // fallback
];
var AppRoutingModule = class _AppRoutingModule {
  static {
    this.\u0275fac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppRoutingModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        RouterModule.forRoot(routes)
      ],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/comments/comments.component.ts
function CommentsComponent_div_0_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(comment_r2.description);
  }
}
function CommentsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "ul");
    \u0275\u0275template(2, CommentsComponent_div_0_li_2_Template, 2, 1, "li", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 2);
    \u0275\u0275listener("ngSubmit", function CommentsComponent_div_0_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.add());
    });
    \u0275\u0275elementStart(4, "input", 3);
    \u0275\u0275twoWayListener("ngModelChange", function CommentsComponent_div_0_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newComment, $event) || (ctx_r2.newComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275text(6, "Add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.comments);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newComment);
  }
}
var CommentsComponent = class _CommentsComponent {
  constructor(commentService) {
    this.commentService = commentService;
    this.comments = [];
    this.newComment = "";
  }
  ngOnInit() {
    this.loadComments();
  }
  loadComments() {
    this.commentService.getByTaskId(this.taskId).subscribe((comments) => this.comments = comments);
  }
  add() {
    this.commentService.addComment(this.taskId, this.newComment).subscribe(() => {
      this.newComment = "";
      this.loadComments();
    });
  }
  static {
    this.\u0275fac = function CommentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommentsComponent)(\u0275\u0275directiveInject(CommentService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommentsComponent, selectors: [["app-comments"]], inputs: { taskId: "taskId" }, standalone: false, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngSubmit"], ["name", "comment", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit"]], template: function CommentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CommentsComponent_div_0_Template, 7, 2, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.taskId);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommentsComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "app-comments",
      template: `
    <div *ngIf="taskId">
      <ul>
        <li *ngFor="let comment of comments">{{ comment.description }}</li>
      </ul>
      <form (ngSubmit)="add()">
        <input [(ngModel)]="newComment" name="comment" required>
        <button type="submit">Add</button>
      </form>
    </div>
  `
    }]
  }], () => [{ type: CommentService }], { taskId: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommentsComponent, { className: "CommentsComponent", filePath: "src/app/components/comments/comments.component.ts", lineNumber: 19 });
})();

// src/app/services/tenant.interceptor.ts
var TenantInterceptor = class _TenantInterceptor {
  intercept(req, next) {
    const tenantId = localStorage.getItem("tenantId") || "public";
    return next.handle(req.clone({ setHeaders: { "X-Tenant-Id": tenantId } }));
  }
  static {
    this.\u0275fac = function TenantInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TenantInterceptor)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TenantInterceptor, factory: _TenantInterceptor.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantInterceptor, [{
    type: Injectable
  }], null, null);
})();

// src/app/components/register-invite/register-invite.component.ts
function RegisterInviteComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 1);
    \u0275\u0275text(2, "\u041D\u0435\u0434\u0456\u0439\u0441\u043D\u0435 \u0430\u0431\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u0435 \u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044F");
    \u0275\u0275elementEnd()();
  }
}
function RegisterInviteComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "form", 2);
    \u0275\u0275listener("ngSubmit", function RegisterInviteComponent_div_1_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(2, "input", 3);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterInviteComponent_div_1_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.user.name, $event) || (ctx_r1.user.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterInviteComponent_div_1_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.user.password, $event) || (ctx_r1.user.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275text(5, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.user.name);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.user.password);
  }
}
var RegisterInviteComponent = class _RegisterInviteComponent {
  constructor(route, http) {
    this.route = route;
    this.http = http;
    this.token = "";
    this.valid = false;
    this.checked = false;
    this.user = { name: "", password: "" };
    this.api = `${environment.apiUrl}/api`;
  }
  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get("token") || "";
    this.http.get(`${this.api}/invitations/validate?token=${this.token}`, { withCredentials: true }).subscribe((res) => {
      this.valid = res;
      this.checked = true;
    });
  }
  submit() {
    this.http.post(`${this.api}/invitations/register?token=` + this.token, this.user, { withCredentials: true }).subscribe({
      next: () => alert("\u0423\u0441\u043F\u0456\u0448\u043D\u043E!"),
      error: (err) => alert(err.error || "\u041F\u043E\u043C\u0438\u043B\u043A\u0430")
    });
  }
  static {
    this.\u0275fac = function RegisterInviteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterInviteComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterInviteComponent, selectors: [["app-register-invite"]], standalone: false, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "text-danger"], [3, "ngSubmit"], ["type", "text", "name", "name", "placeholder", "\u0406\u043C'\u044F", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit"]], template: function RegisterInviteComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, RegisterInviteComponent_div_0_Template, 3, 0, "div", 0)(1, RegisterInviteComponent_div_1_Template, 6, 2, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.valid && ctx.checked);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.valid);
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterInviteComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-register-invite", template: `<div *ngIf="!valid && checked">\r
  <p class="text-danger">\u041D\u0435\u0434\u0456\u0439\u0441\u043D\u0435 \u0430\u0431\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u0435 \u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044F</p>\r
</div>\r
\r
<div *ngIf="valid">\r
  <form (ngSubmit)="submit()">\r
    <input type="text" [(ngModel)]="user.name" name="name" placeholder="\u0406\u043C'\u044F" required>\r
    <input type="password" [(ngModel)]="user.password" name="password" placeholder="\u041F\u0430\u0440\u043E\u043B\u044C" required>\r
    <button type="submit">\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F</button>\r
  </form>\r
</div>\r
` }]
  }], () => [{ type: ActivatedRoute }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterInviteComponent, { className: "RegisterInviteComponent", filePath: "src/app/components/register-invite/register-invite.component.ts", lineNumber: 11 });
})();

// src/app/components/task-type-details/task-type-details.component.ts
var TaskTypeDetailsComponent = class _TaskTypeDetailsComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function TaskTypeDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TaskTypeDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskTypeDetailsComponent, selectors: [["app-task-type-details"]], standalone: false, decls: 2, vars: 0, template: function TaskTypeDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "task-type-details works!");
        \u0275\u0275elementEnd();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskTypeDetailsComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-task-type-details", template: "<p>task-type-details works!</p>\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskTypeDetailsComponent, { className: "TaskTypeDetailsComponent", filePath: "src/app/components/task-type-details/task-type-details.component.ts", lineNumber: 9 });
})();

// src/app/components/task-type-list/task-type-list.component.ts
var TaskTypeListComponent = class _TaskTypeListComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function TaskTypeListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TaskTypeListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskTypeListComponent, selectors: [["app-task-type-list"]], standalone: false, decls: 2, vars: 0, template: function TaskTypeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "task-type-list works!");
        \u0275\u0275elementEnd();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskTypeListComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-task-type-list", template: "<p>task-type-list works!</p>\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskTypeListComponent, { className: "TaskTypeListComponent", filePath: "src/app/components/task-type-list/task-type-list.component.ts", lineNumber: 9 });
})();

// src/app/components/custom-field-list/custom-field-list.component.ts
var CustomFieldListComponent = class _CustomFieldListComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function CustomFieldListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomFieldListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomFieldListComponent, selectors: [["app-custom-field-list"]], standalone: false, decls: 2, vars: 0, template: function CustomFieldListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "custom-field-list works!");
        \u0275\u0275elementEnd();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomFieldListComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-custom-field-list", template: "<p>custom-field-list works!</p>\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomFieldListComponent, { className: "CustomFieldListComponent", filePath: "src/app/components/custom-field-list/custom-field-list.component.ts", lineNumber: 9 });
})();

// src/app/components/custom-field-details/custom-field-details.component.ts
var CustomFieldDetailsComponent = class _CustomFieldDetailsComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function CustomFieldDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomFieldDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomFieldDetailsComponent, selectors: [["app-custom-field-details"]], standalone: false, decls: 2, vars: 0, template: function CustomFieldDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "custom-field-details works!");
        \u0275\u0275elementEnd();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomFieldDetailsComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-custom-field-details", template: "<p>custom-field-details works!</p>\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomFieldDetailsComponent, { className: "CustomFieldDetailsComponent", filePath: "src/app/components/custom-field-details/custom-field-details.component.ts", lineNumber: 9 });
})();

// src/app/app.module.ts
var AppModule = class _AppModule {
  static {
    this.\u0275fac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
      provideHttpClient(withInterceptorsFromDi()),
      { provide: HTTP_INTERCEPTORS, useClass: TenantInterceptor, multi: true }
    ], imports: [
      BrowserModule,
      AppRoutingModule,
      DragDropModule,
      SharedModule,
      FormsModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppModule, [{
    type: NgModule,
    args: [{
      declarations: [
        AppComponent,
        TopbarComponent,
        ReportsComponent,
        SettingsComponent,
        HomePageComponent,
        ProfileComponent,
        UsersComponent,
        UserComponent,
        RoleModalComponent,
        AddUserModalComponent,
        TaskDetailComponent,
        LoginComponent,
        CommentsComponent,
        LogoutComponent,
        RegisterComponent,
        AllTasksComponent,
        RegisterInviteComponent,
        InviteUserComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        TaskTypeDetailsComponent,
        TaskTypeListComponent,
        CustomFieldListComponent,
        CustomFieldDetailsComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        DragDropModule,
        SharedModule,
        FormsModule,
        BaseChartDirective
      ],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        { provide: HTTP_INTERCEPTORS, useClass: TenantInterceptor, multi: true }
      ],
      bootstrap: [AppComponent]
    }]
  }], null, null);
})();

// src/main.ts
if (environment.production) {
  enableProdMode();
}
platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
