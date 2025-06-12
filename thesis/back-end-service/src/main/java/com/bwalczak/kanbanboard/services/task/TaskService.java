package com.bwalczak.kanbanboard.services.task;

import com.bwalczak.kanbanboard.entities.task.Task;

import java.util.List;
import java.util.Optional;

public interface TaskService {

    List<Task> getAllTasks();

    Optional<Task> getTaskById(Long id);

    Optional<Task> getTaskByTitle(String title);
}
