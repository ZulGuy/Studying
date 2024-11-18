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

  public Song() {
  }

  public Song(String title, Timestamp duration, String genre,
      List<Author> author, List<Playlist> playlist) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
    this.author = author;
    this.playlist = playlist;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public Timestamp getDuration() {
    return duration;
  }

  public void setDuration(Timestamp duration) {
    this.duration = duration;
  }

  public String getGenre() {
    return genre;
  }

  public void setGenre(String genre) {
    this.genre = genre;
  }

  public List<Author> getAuthor() {
    return author;
  }

  public void setAuthor(List<Author> author) {
    this.author = author;
  }

  public List<Playlist> getPlaylist() {
    return playlist;
  }

  public void setPlaylist(List<Playlist> playlist) {
    this.playlist = playlist;
  }
}
