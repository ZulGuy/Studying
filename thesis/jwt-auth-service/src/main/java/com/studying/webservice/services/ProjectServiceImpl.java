package com.studying.webservice.services;

import com.studying.webservice.dto.ProjectDTO;
import com.studying.webservice.models.Project;
import com.studying.webservice.repositories.ProjectRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl implements ProjectService {

  ProjectRepository projectRepository;

  @Autowired
  public ProjectServiceImpl(ProjectRepository projectRepository) {
    this.projectRepository = projectRepository;
  }

  @Override
  public List<ProjectDTO> getAllProjectsForCurrentUser() {
    List<Project> projects = projectRepository.findAll();

    return projects.stream()
        .map(this::toDto)
        .collect(Collectors.toList());

  }

  @Override
  public ProjectDTO getProjectById(int id) {
    Project project = projectRepository.findById(id).orElseThrow();
    return toDto(project);
  }

  public ProjectDTO toDto(Project project) {
    ProjectDTO dto = new ProjectDTO();
    dto.setId(project.getId());
    dto.setName(project.getName());
    dto.setDescription(project.getDescription());
    return dto;
  }
}
