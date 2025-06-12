package com.studying.webservice.dto;

import java.util.List;

public class AddUserToProjectDTO {

  private int userId;
  private String role;

  public AddUserToProjectDTO() {
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }
}
