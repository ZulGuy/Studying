package com.studying.webservice.services;

import com.studying.webservice.dto.ProjectDTO;
import java.util.List;

public interface ProjectService {

  List<ProjectDTO> getAllProjectsForCurrentUser();
  ProjectDTO getProjectById(int id);

}
