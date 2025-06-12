package com.studying.webservice.services;

import com.studying.webservice.models.Project;
import com.studying.webservice.models.Task;
import com.studying.webservice.repositories.ProjectRepository;
import com.studying.webservice.repositories.TaskRepository;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {

  private final TaskRepository taskRepository;
  private final ProjectRepository projectRepository;

  @Autowired
  public TaskServiceImpl(TaskRepository taskRepository, ProjectRepository projectRepository) {
    this.taskRepository = taskRepository;
    this.projectRepository = projectRepository;
  }

  @Override
  public Task createTask(Task task) {
    return taskRepository.save(task);
  }

  @Override
  public List<Task> getTasksForProject(int projectId) {
    Project project = projectRepository.findById(projectId)
        .orElseThrow(() -> new EntityNotFoundException("Project not found"));
    return project.getTasks();
  }

  @Override
  public Task getTaskById(int id) {
    return taskRepository.findById(id)
        .orElseThrow(() -> new EntityNotFoundException("Task not found"));
  }

  @Override
  public void deleteTask(int id) {
    taskRepository.deleteById(id);
  }

  @Override
  public Task updateTask(Task task) {
    return taskRepository.save(task);
  }
}
