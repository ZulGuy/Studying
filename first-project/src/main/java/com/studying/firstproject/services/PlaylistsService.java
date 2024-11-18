package com.studying.firstproject.services;

import com.studying.firstproject.entities.Author;
import com.studying.firstproject.entities.Playlist;
import com.studying.firstproject.repositories.PlaylistsRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class PlaylistsService {

  PlaylistsRepository playlistsRepository;

  @Autowired
  public PlaylistsService(PlaylistsRepository playlistsRepository) {
    this.playlistsRepository = playlistsRepository;
  }

  public List<Playlist> findAll() {
    return playlistsRepository.findAll();
  }

  public Playlist findById(int id) {
    return playlistsRepository.findById(id).orElse(null);
  }

  @Transactional
  public boolean save(Playlist playlist) {
    if (findById(playlist.getId()) == null) {
      playlistsRepository.save(playlist);
      return true;
    }
    return false;
  }

  @Transactional
  public boolean update(Playlist updatedPlaylist) {
    if (findById(updatedPlaylist.getId()) != null) {
      playlistsRepository.save(updatedPlaylist);
      return true;
    }
    return false;
  }

  @Transactional
  public boolean delete(int id) {
    if (findById(id) != null) {
      playlistsRepository.deleteById(id);
      return true;
    }
    return false;
  }
}
