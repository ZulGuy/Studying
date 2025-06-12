package com.studying.webservice.dto;

import java.util.List;

public class UpdateProjectRolesDTO {

  private List<String> roles;

  public UpdateProjectRolesDTO() {
  }

  public List<String> getRoles() {
    return roles;
  }

  public void setRoles(List<String> roles) {
    this.roles = roles;
  }
}
