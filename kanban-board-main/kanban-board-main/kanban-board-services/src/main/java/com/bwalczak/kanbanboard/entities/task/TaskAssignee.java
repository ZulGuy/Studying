package com.bwalczak.kanbanboard.entities.task;

import com.bwalczak.kanbanboard.entities.common.Person;
import lombok.Data;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "task_assignees")
public class TaskAssignee extends Person {

    @ManyToMany(mappedBy = "assignees")
    private Set<Task> tasks = new HashSet<>();
}
