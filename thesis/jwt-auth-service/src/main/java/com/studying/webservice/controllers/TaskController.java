package com.studying.webservice.controllers;

import com.studying.webservice.models.Task;
import com.studying.webservice.services.TaskService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

  private final TaskService taskService;

  @Autowired
  public TaskController(TaskService taskService) {
    this.taskService = taskService;
  }

  @PostMapping
  public ResponseEntity<Task> createTask(@RequestBody Task task) {
    return ResponseEntity.ok(taskService.createTask(task));
  }

  @GetMapping("/{id}")
  public ResponseEntity<Task> getTask(@PathVariable int id) {
    return ResponseEntity.ok(taskService.getTaskById(id));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Task> updateTask(@PathVariable int id, @RequestBody Task updated) {
    updated.setId(id);
    return ResponseEntity.ok(taskService.updateTask(updated));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteTask(@PathVariable int id) {
    taskService.deleteTask(id);
    return ResponseEntity.ok().build();
  }

  @GetMapping("/project/{projectId}")
  public ResponseEntity<List<Task>> getTasksForProject(@PathVariable int projectId) {
    return ResponseEntity.ok(taskService.getTasksForProject(projectId));
  }

}
