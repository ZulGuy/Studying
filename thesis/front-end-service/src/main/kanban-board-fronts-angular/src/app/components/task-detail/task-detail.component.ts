import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ProjectService} from "../../services/project.service";
import {Column} from "../../models/column.model";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  taskId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
  }
}
