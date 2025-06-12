package com.studying.webservice.controllers;

import com.studying.webservice.dto.AddUserToProjectDTO;
import com.studying.webservice.dto.ProjectUserDTO;
import com.studying.webservice.dto.UpdateProjectRolesDTO;
import com.studying.webservice.services.ProjectUserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/projects/{projectId}/users")
public class ProjectUserController {

  private final ProjectUserService projectUserService;

  @Autowired
  public ProjectUserController(ProjectUserService projectUserService) {
    this.projectUserService = projectUserService;
  }

  @GetMapping
  public List<ProjectUserDTO> list(@PathVariable int projectId) {
    return projectUserService.getUsersForProject(projectId);
  }

  @PostMapping
  public void addUser(@PathVariable int projectId, @RequestBody AddUserToProjectDTO dto) {
    projectUserService.addUserToProject(projectId, dto);
  }

  @PutMapping("/{userId}/roles")
  public void updateRole(@PathVariable int projectId, @PathVariable int userId, @RequestBody UpdateProjectRolesDTO dto) {
    projectUserService.updateRoles(projectId, userId, dto);
  }

  @DeleteMapping("/{userId}")
  public void deleteUser(@PathVariable int projectId, @PathVariable int userId) {
    projectUserService.removeUserFromProject(projectId, userId);
  }

}
