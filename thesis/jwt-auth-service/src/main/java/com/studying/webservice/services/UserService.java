package com.studying.webservice.services;

import com.studying.webservice.dto.UserDTO;
import java.util.List;

public interface UserService {

  List<UserDTO> searchUsers(String query);
  UserDTO getUserById(int id);

}
