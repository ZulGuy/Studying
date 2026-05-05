package com.studying.backendservice.services;

public interface TennantService {

  void createTennant(String name);
  void deleteTennant(String name);
  void updateTennant(String oldName, String newName);

}
