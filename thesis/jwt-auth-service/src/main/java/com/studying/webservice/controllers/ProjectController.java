package com.studying.webservice.controllers;

import com.studying.webservice.dto.ProjectDTO;
import com.studying.webservice.services.ProjectService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

  private final ProjectService projectService;

  @Autowired
  public ProjectController(ProjectService projectService){
    this.projectService = projectService;
  }

  @GetMapping
  public List<ProjectDTO> getAll(){
    return projectService.getAllProjectsForCurrentUser();
  }

  @GetMapping("/{id}")
  public ProjectDTO getById(@PathVariable int id) {
    return projectService.getProjectById(id);
  }

}
