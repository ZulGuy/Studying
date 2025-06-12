package com.studying.webservice.controllers;

import com.studying.webservice.models.Comment;
import com.studying.webservice.services.CommentService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

  private final CommentService commentService;

  @Autowired
  public CommentController(CommentService commentService) {
    this.commentService = commentService;
  }

  @PostMapping
  public ResponseEntity<Comment> addComment(@RequestBody Comment comment) {
    return ResponseEntity.ok(commentService.addComment(comment));
  }

  @GetMapping("/task/{taskId}")
  public ResponseEntity<List<Comment>> getComments(@PathVariable int taskId) {
    return  ResponseEntity.ok(commentService.getCommentsForTask(taskId));
  }

}
