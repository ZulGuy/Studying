package com.studying.webservice.services;

import com.studying.webservice.dto.AddUserToProjectDTO;
import com.studying.webservice.dto.ProjectUserDTO;
import com.studying.webservice.dto.UpdateProjectRolesDTO;
import com.studying.webservice.models.Project;
import com.studying.webservice.models.ProjectUser;
import com.studying.webservice.models.User;
import com.studying.webservice.repositories.ProjectRepository;
import com.studying.webservice.repositories.ProjectUserRepository;
import com.studying.webservice.repositories.UserRepository;
import com.studying.webservice.utils.ProjectRole;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import org.apache.catalina.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectUserServiceImpl implements ProjectUserService {

  private final ProjectRepository projectRepository;
  private final UserRepository userRepository;
  private final ProjectUserRepository projectUserRepository;

  @Autowired
  public ProjectUserServiceImpl(ProjectRepository projectRepository, UserRepository userRepository, ProjectUserRepository projectUserRepository) {
    this.projectUserRepository = projectUserRepository;
    this.userRepository = userRepository;
    this.projectRepository = projectRepository;
  }

  @Override
  public List<ProjectUserDTO> getUsersForProject(int projectId) {
    return projectUserRepository.findByProjectId(projectId).stream()
        .map(this::toDto)
        .collect(Collectors.toList());
  }

  @Override
  public void addUserToProject(int projectId, AddUserToProjectDTO dto) {
    Project project = projectRepository.findById(projectId).orElseThrow();
    User user = userRepository.findById(dto.getUserId()).orElseThrow();
    ProjectUser pu = new ProjectUser();
    pu.setProject(project);
    pu.setUser(user);
    ProjectRole role = ProjectRole.valueOf(dto.getRole());
    pu.setRole(role);
    projectUserRepository.save(pu);
  }

  @Override
  public void updateRoles(int projectId, int userId, UpdateProjectRolesDTO dto) {
    ProjectUser pu = projectUserRepository.findByProjectIdAndUserId(projectId, userId)
        .orElseThrow();
    Set<ProjectRole> roles = dto.getRoles().stream()
        .map(ProjectRole::valueOf)
        .collect(Collectors.toSet());
    if(roles.isEmpty()) {
      projectUserRepository.delete(pu);
    } else {
      projectUserRepository.save(pu);
    }
  }

  @Override
  public void removeUserFromProject(int projectId, int userId) {
    projectUserRepository.deleteByProjectIdAndUserId(projectId, userId);
  }

  private ProjectUserDTO toDto(ProjectUser pu) {
    User u = pu.getUser();
    ProjectUserDTO dto = new ProjectUserDTO();
    dto.setId(u.getId());
    dto.setName(u.getUsername());
    dto.setEmail(u.getEmail());
    dto.setActive(u.isEnabled());
    dto.setRole(pu.getRole());
    return dto;
  }
}
