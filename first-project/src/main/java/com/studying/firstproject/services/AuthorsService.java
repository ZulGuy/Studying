package com.studying.firstproject.services;

import com.studying.firstproject.entities.Author;
import com.studying.firstproject.repositories.AuthorsRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class AuthorsService {

  AuthorsRepository authorsRepository;

  @Autowired
  public AuthorsService(AuthorsRepository authorsRepository) {
    this.authorsRepository = authorsRepository;
  }

  public List<Author> findAll() {
    return authorsRepository.findAll();
  }

  public Author findById(int id) {
    Optional<Author> foundAuthor = authorsRepository.findById(id);
    return foundAuthor.orElse(null);
  }

  @Transactional
  public boolean save(Author author) {
    if (findById(author.getId()) == null) {
      authorsRepository.save(author);
      return true;
    }
    return false;
  }

  @Transactional
  public boolean update(Author updatedAuthor) {
    if (findById(updatedAuthor.getId()) != null) {
      authorsRepository.save(updatedAuthor);
      return true;
    }
    return false;
  }

  @Transactional
  public boolean delete(int id) {
    if (findById(id) != null) {
      authorsRepository.deleteById(id);
      return true;
    }
    return false;
  }
}
