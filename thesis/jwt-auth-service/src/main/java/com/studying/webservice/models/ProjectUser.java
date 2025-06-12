package com.studying.webservice.models;

import com.studying.webservice.utils.ProjectRole;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "project_users", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"user_id", "project_id"})
})
public class ProjectUser {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @ManyToOne(optional = false)
  @JoinColumn(name = "project_id")
  private Project project;

  @ManyToOne(optional = false)
  @JoinColumn(name = "user_id")
  private User user;

  @Enumerated(EnumType.STRING)
  @Column(name = "role", nullable = false)
  private ProjectRole role;

  public void setId(int id) {
    this.id = id;
  }

  public int getId() {
    return id;
  }

  public Project getProject() {
    return project;
  }

  public void setProject(Project project) {
    this.project = project;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public ProjectRole getRole() {
    return role;
  }

  public void setRole(ProjectRole role) {
    this.role = role;
  }
}
