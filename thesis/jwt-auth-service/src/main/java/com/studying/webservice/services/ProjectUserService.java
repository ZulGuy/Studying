package com.studying.webservice.services;

import com.studying.webservice.dto.AddUserToProjectDTO;
import com.studying.webservice.dto.ProjectUserDTO;
import com.studying.webservice.dto.UpdateProjectRolesDTO;
import java.util.List;

public interface ProjectUserService {
  List<ProjectUserDTO> getUsersForProject(int projectId);
  void addUserToProject(int projectId, AddUserToProjectDTO dto);
  void updateRoles(int projectId, int userId, UpdateProjectRolesDTO dto);
  void removeUserFromProject(int projectId, int userId);

}
