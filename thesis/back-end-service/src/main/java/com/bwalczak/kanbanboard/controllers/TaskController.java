package com.bwalczak.kanbanboard.controllers;

import com.bwalczak.kanbanboard.entities.task.Task;
import com.bwalczak.kanbanboard.services.task.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    @GetMapping("/")
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/id/{id}")
    public Task getTaskById(@PathVariable Long id) {
        return taskService.getTaskById(id).orElseThrow(() -> new RuntimeException("No task was found with id: " + id));
    }

    @GetMapping("/title/{title}")
    public Task getTaskByTitle(@PathVariable String title) {
        return taskService.getTaskByTitle(title).orElseThrow(() -> new RuntimeException("No task was found with title: " + title));
    }

}
