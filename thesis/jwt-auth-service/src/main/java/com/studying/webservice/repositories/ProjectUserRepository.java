package com.studying.webservice.repositories;

import com.studying.webservice.models.ProjectUser;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectUserRepository extends JpaRepository<ProjectUser, Integer> {
  List<ProjectUser> findByProjectId(int projectId);
  Optional<ProjectUser> findByProjectIdAndUserId(int projectId, int userId);
  void deleteByProjectIdAndUserId(int projectId, int userId);
}
