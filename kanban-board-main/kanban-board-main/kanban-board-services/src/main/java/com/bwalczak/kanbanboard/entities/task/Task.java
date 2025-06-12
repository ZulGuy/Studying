package com.bwalczak.kanbanboard.entities.task;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import jakarta.persistence.*;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.CreationTimestamp;

@Data
@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "color")
    private String color;

    @Column(name = "title")
    private String title;

    @CreationTimestamp
    @Column(name = "date_created")
    private Date dateCreated;

    @UpdateTimestamp
    @Column(name = "last_updated")
    private Date lastUpdated;

    @Column(name = "task_status")
    @Enumerated(EnumType.STRING)
    private TaskStatus status;

    @Column(name = "task_description")
    private String description;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "owner_id", nullable = false)
    private TaskOwner owner;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "category_id", nullable = false)
    private TaskCategory category;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "task_assignees_groups",
            joinColumns = @JoinColumn(name = "tasks_id"),
            inverseJoinColumns = @JoinColumn(name = "task_assignees_id"))
    private Set<TaskAssignee> assignees = new HashSet<>();
}
