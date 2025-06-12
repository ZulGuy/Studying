package com.studying.webservice.repositories;

import com.studying.webservice.models.Task;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task,Integer> {
  List<Task> findByAssigneeId(int id);
  List<Task> findByTaskId(int id);
  List<Task> findByInitiatorId(int id);
  List<Task> findAllByParticipantsId(int userId);

}
