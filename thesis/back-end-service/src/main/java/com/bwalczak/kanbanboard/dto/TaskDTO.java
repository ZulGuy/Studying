package com.bwalczak.kanbanboard.dto;

import com.bwalczak.kanbanboard.entities.task.TaskAssignee;
import com.bwalczak.kanbanboard.entities.task.TaskCategory;
import com.bwalczak.kanbanboard.entities.task.TaskOwner;
import com.bwalczak.kanbanboard.entities.task.TaskStatus;
import lombok.Data;

import java.util.Set;

@Data
public class TaskDTO {

    private String title;
    private String color;
    private TaskOwner owner;
    private TaskStatus status;
    private String description;
    private TaskCategory category;
    private Set<TaskAssignee> assignees;
}
