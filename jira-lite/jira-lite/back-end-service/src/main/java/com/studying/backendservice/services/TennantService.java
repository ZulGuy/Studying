package com.studying.backendservice.services;

import com.studying.backendservice.dto.TennantDTO;
import com.studying.backendservice.models.Tennant;
import java.util.List;

public interface TennantService {

  List<TennantDTO> getAllTennants();
  TennantDTO getTennantByName(String name);
  TennantDTO createTennant(String name, int adminId);
  void deleteTennant(int id);
  TennantDTO toDto(Tennant tennant);

}
