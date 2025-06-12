package com.studying.webservice.services;

import com.studying.webservice.models.Comment;
import java.util.List;

public interface CommentService {
  Comment addComment(Comment comment);
  List<Comment> getCommentsForTask(int taskId);

}
