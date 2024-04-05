package com.studying.firstproject.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "songs")
public class Song {

  @Id
  @NotEmpty
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @NotEmpty
  @Column(name = "title")
  private String title;

  @NotEmpty
  @Column(name = "duration")
  private Timestamp duration;

  @NotEmpty
  @Column(name = "genre")
  private String genre;

  @OneToMany
  @JoinColumn(name = "author_id")
  private List<Author> author;

  @OneToMany
  @JoinColumn(name = "playlists_id")
  private List<Playlist> playlist;

}
