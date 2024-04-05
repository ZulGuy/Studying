package com.studying.firstproject.repositories;

import com.studying.firstproject.entities.Playlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaylistsRepository extends JpaRepository<Playlist, Integer> {

}
