package com.studying.backendservice.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Email;
import java.io.Serializable;

public class AuthRequest implements Serializable {

  @JsonProperty("email")
  @Email
  public String email;
  @JsonProperty("password")
  public String password;

  public AuthRequest(String email, String password) {
    this.email = email;
    this.password = password;
  }

  public AuthRequest() {
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }
}
