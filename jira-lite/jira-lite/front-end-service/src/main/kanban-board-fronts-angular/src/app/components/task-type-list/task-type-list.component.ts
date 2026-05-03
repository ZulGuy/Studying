import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskTypeService } from '../../services/task-type.service';
import { TaskTypeDTO } from '../../types/api.types';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-task-type-list',
  templateUrl: './task-type-list.component.html',
  styleUrls: ['./task-type-list.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class TaskTypeListComponent implements OnInit {
  taskTypes: TaskTypeDTO[] = [];
  newTypeName = '';

  constructor(private taskTypeService: TaskTypeService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.taskTypeService.getAll().subscribe(types => this.taskTypes = types);
  }

  addType(): void {
    if (!this.newTypeName.trim()) return;
    this.taskTypeService.add(this.newTypeName.trim()).subscribe(() => {
      this.newTypeName = '';
      this.load();
    });
  }

  goToType(name: string): void {
    this.router.navigate(['/admin/task-types', name]);
  }
}
