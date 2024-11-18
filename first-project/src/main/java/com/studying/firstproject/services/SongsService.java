package com.studying.firstproject.services;

import com.studying.firstproject.entities.Song;
import com.studying.firstproject.repositories.SongsRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class SongsService {

  SongsRepository songsRepository;

  @Autowired
  public SongsService(SongsRepository songsRepository) {
    this.songsRepository = songsRepository;
  }

  public List<Song> findAll() {
    return songsRepository.findAll();
  }

  public Song findById(int id) {
    return songsRepository.findById(id).orElse(null);
  }

  @Transactional
  public boolean save(Song song) {
    if (findById(song.getId()) == null) {
      songsRepository.save(song);
      return true;
    }
    return false;
  }

  @Transactional
  public boolean update(Song updatedSong) {
    if (findById(updatedSong.getId()) != null) {
      songsRepository.save(updatedSong);
      return true;
    }
    return false;
  }

  @Transactional
  public boolean delete(int id) {
    if (findById(id) != null) {
      songsRepository.deleteById(id);
      return true;
    }
    return false;
  }

}
