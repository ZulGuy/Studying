package com.studying.webservice.services;

import com.studying.webservice.models.Comment;
import com.studying.webservice.repositories.CommentRepository;
import com.studying.webservice.repositories.TaskRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService {

  private final CommentRepository commentRepository;
  private final TaskRepository taskRepository;

  @Autowired
  public CommentServiceImpl(CommentRepository commentRepository, TaskRepository taskRepository) {
    this.commentRepository = commentRepository;
    this.taskRepository = taskRepository;
  }

  @Override
  public Comment addComment(Comment comment) {
    return commentRepository.save(comment);
  }

  @Override
  public List<Comment> getCommentsForTask(int taskId) {
    return commentRepository.findByTaskId(taskId);
  }
}
