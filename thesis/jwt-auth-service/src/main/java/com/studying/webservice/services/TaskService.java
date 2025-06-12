package com.studying.webservice.services;

import com.studying.webservice.models.Task;
import java.util.List;

public interface TaskService {
  Task createTask(Task task);
  List<Task> getTasksForProject(int projectId);
  Task getTaskById(int id);
  void deleteTask(int id);
  Task updateTask(Task task);

}
