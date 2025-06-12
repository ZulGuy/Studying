package com.studying.webservice.controllers;

import com.studying.webservice.configurations.SchemaTenantIdentifierResolver;
import com.studying.webservice.configurations.TenantContext;
import com.studying.webservice.dto.AuthRequest;
import com.studying.webservice.dto.AuthResponse;
import com.studying.webservice.models.User;
import com.studying.webservice.repositories.UserRepository;
import com.studying.webservice.services.JwtService;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
  private final AuthenticationManager authenticationManager;
  private final JwtService jwtService;
  private final UserRepository userRepository;
  public SchemaTenantIdentifierResolver schemaTenantIdentifierResolver;

  @Autowired
  public AuthController(
      AuthenticationManager authenticationManager, JwtService jwtService,
      UserRepository userRepository, SchemaTenantIdentifierResolver schemaTenantIdentifierResolver) {
    this.authenticationManager = authenticationManager;
    this.jwtService = jwtService;
    this.userRepository = userRepository;
    this.schemaTenantIdentifierResolver = schemaTenantIdentifierResolver;
  }

  @PostMapping(value = "/login",
      consumes = MediaType.APPLICATION_JSON_VALUE,
      produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<String> login(@RequestBody AuthRequest request) {
    String tenant = resolveTenantId(request.getUsername());
    TenantContext.setTenantId(tenant);
    schemaTenantIdentifierResolver.resolveCurrentTenantIdentifier();
    System.out.println("request login" + request.username + request.password);
    System.out.println("TenantContext: " + TenantContext.getTenantId());
    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.username, request.password)
    );
    System.out.println("request login" + request.username + request.password);
    var user = (User) authentication.getPrincipal();
    Map<String, Object> claims = new HashMap<>();
    claims.put("tennantId", user.getTenantId());
    claims.put("role", user.getAuthorities());
    String token = jwtService.generateToken(claims, user);
    ResponseCookie jwtCookie = ResponseCookie.from("jwt", token)
        .httpOnly(true)
        .secure(true) // важливо! Працює тільки по HTTPS
        .path("/")
        .maxAge(24 * 60 * 60) // 1 день
        .sameSite("Strict") // або "Lax"
        .build();

    return ResponseEntity.ok()
        .header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
        .body("Login successful");
  }

  private String resolveTenantId(String login) {
    int at = login.indexOf('@');
    return (at > 0) ? login.substring(at + 1) : "public";
  }
}
