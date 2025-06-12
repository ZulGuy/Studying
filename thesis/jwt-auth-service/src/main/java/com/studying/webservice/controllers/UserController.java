package com.studying.webservice.controllers;

import com.studying.webservice.dto.UserDTO;
import com.studying.webservice.services.UserService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping
  public List<UserDTO> search(@RequestParam Optional<String> query) {
    return userService.searchUsers(query.orElse(""));
  }

  @GetMapping("/{id}")
  public UserDTO getById(@PathVariable int id) {
    return userService.getUserById(id);
  }

}
