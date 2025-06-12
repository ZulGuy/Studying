package com.studying.webservice.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
@Table(name="tasks")
public class Task {

  @Id
  @GeneratedValue(strategy= GenerationType.IDENTITY)
  private int id;

  @Column(name = "summary", nullable = false)
  private String summary;
  @Column(name = "description", nullable = false)
  private String description;

  @OneToMany(mappedBy = "task", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Comment> comments = new ArrayList<Comment>();

  @ManyToOne
  @JoinColumn(name = "assignee_id")
  private User assignee;

  @ManyToOne
  @JoinColumn(name = "initiator_id")
  private User initiator;

  @ManyToMany
  @JoinTable(
      name = "task_participants",
      joinColumns = @JoinColumn(name = "task_id"),
      inverseJoinColumns = @JoinColumn(name = "user_id")
  )
  private Set<User> taskParticipants = new HashSet<User>();

  private LocalDateTime createdAt = LocalDateTime.now();

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getSummary() {
    return summary;
  }

  public void setSummary(String summary) {
    this.summary = summary;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Collection<Comment> getComments() {
    return comments;
  }

  public void setComments(List<Comment> comments) {
    this.comments = comments;
  }


  public User getAssignee() {
    return assignee;
  }

  public void setAssignee(User assignee) {
    this.assignee = assignee;
  }

  public User getInitiator() {
    return initiator;
  }

  public void setInitiator(User initiator) {
    this.initiator = initiator;
  }

  public Collection<User> getTaskParticipants() {
    return taskParticipants;
  }

  public void setTaskParticipants(Set<User> taskMembers) {
    this.taskParticipants = taskMembers;
  }
}
