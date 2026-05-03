import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskTypeService } from '../../services/task-type.service';
import { TaskDTO } from '../../types/api.types';
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-task-type-details',
  templateUrl: './task-type-details.component.html',
  styleUrls: ['./task-type-details.component.scss'],
  imports: [CommonModule]
})
export class TaskTypeDetailsComponent implements OnInit {
  typeName = '';
  tasks: TaskDTO[] = [];

  constructor(private route: ActivatedRoute, private taskTypeService: TaskTypeService) {}

  ngOnInit(): void {
    this.typeName = this.route.snapshot.paramMap.get('name') || '';
    this.taskTypeService.getTasksByType(this.typeName).subscribe(tasks => this.tasks = tasks);
  }
}
