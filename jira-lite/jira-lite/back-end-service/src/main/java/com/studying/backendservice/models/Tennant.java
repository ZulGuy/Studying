package com.studying.backendservice.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tennants")
public class Tennant {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  @Column(name = "name", nullable = false, unique = true)
  private String name;
  @Column(name = "status", nullable = false)
  private boolean status = true;
  @OneToOne
  @JoinColumn(name = "admin_id")
  private User admin;

  public Tennant(String name, User admin) {
    this.name = name;
    this.admin = admin;
  }

  public Tennant() {}

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public boolean isEnabled() {
    return status;
  }

  public void setEnabled(boolean status) {
    this.status = status;
  }

  public User getAdmin() {
    return admin;
  }

  public void setAdmin(User admin) {
    this.admin = admin;
  }
}
