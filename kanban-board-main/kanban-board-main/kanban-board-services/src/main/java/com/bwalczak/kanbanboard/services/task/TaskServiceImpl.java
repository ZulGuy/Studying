package com.bwalczak.kanbanboard.services.task;

import com.bwalczak.kanbanboard.dao.TaskRepository;
import com.bwalczak.kanbanboard.entities.task.Task;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;

    @Override
    public List<Task> getAllTasks() {
        return new ArrayList<>(taskRepository.findAll());
    }

    @Override
    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    @Override
    public Optional<Task> getTaskByTitle(String title) {
        return taskRepository.findByTitle(title);
    }
}
