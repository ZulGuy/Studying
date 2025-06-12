package com.bwalczak.kanbanboard.entities.task;

import com.bwalczak.kanbanboard.entities.common.Person;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "task_owners")
public class TaskOwner extends Person {

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "owner")
    private Set<Task> tasks = new HashSet<>();

}
