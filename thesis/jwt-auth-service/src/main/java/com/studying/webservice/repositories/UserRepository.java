package com.studying.webservice.repositories;

import com.studying.webservice.models.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
  List<User> findByNameContainingIgnoreCase(String name);
  Optional<User> findByUsername(String username);
}
