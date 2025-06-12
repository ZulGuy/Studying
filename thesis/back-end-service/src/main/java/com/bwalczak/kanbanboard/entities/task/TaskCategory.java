package com.bwalczak.kanbanboard.entities.task;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "task_categories")
public class TaskCategory {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "category_name")
    private String categoryName;

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
    private Set<Task> tasks = new HashSet<>();
}
