package com.studying.webservice.services;

import com.studying.webservice.dto.UserDTO;
import com.studying.webservice.models.User;
import com.studying.webservice.repositories.UserRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;

  @Autowired
  public UserServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public List<UserDTO> searchUsers(String query) {
    return userRepository.findByNameContainingIgnoreCase(query)
        .stream()
        .map(this::toDto)
        .collect(Collectors.toList());
  }

  @Override
  public UserDTO getUserById(int id) {
    return userRepository.findById(id)
        .map(this::toDto)
        .orElseThrow();
  }

  private UserDTO toDto(User user) {
    UserDTO dto = new UserDTO();
    dto.setId(user.getId());
    dto.setName(user.getUsername());
    dto.setEmail(user.getEmail());
    dto.setActive(user.isEnabled());
    return dto;
  }
}
