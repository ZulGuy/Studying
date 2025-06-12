import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskDTO, TaskStatus } from '../../types/api.types';
import {Column} from "../../models/column.model";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  board = {
    name: '',
    description: '',
    columns: [
      { name: 'TODO', tasks: [] as TaskDTO[] },
      { name: 'IN_PROGRESS', tasks: [] as TaskDTO[] },
      { name: 'DONE', tasks: [] as TaskDTO[] }
    ]
  };

  projectId!: number;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.projectId = +id;
        this.loadProject();
        this.loadTasks();
      }
    });
  }


  drop(event: CdkDragDrop<TaskDTO[]>, newStatus: TaskStatus) {
    const task = event.previousContainer.data[event.previousIndex];
    const oldStatus = task.status;

    if (newStatus === 'DONE' && oldStatus !== 'IN_PROGRESS') {
      alert('Задачу можна завершити лише зі статусу "IN_PROGRESS"');
      return;
    }

    if (oldStatus === newStatus) return;

    const previousList = event.previousContainer.data;
    const currentList = event.container.data;
    const previousIndex = event.previousIndex;

    task.status = newStatus;

    this.taskService.updateTask(task).subscribe({
      next: () => {
        if (newStatus === 'DONE') {
          this.loadTasks();
        } else {
          transferArrayItem(previousList, currentList, previousIndex, event.currentIndex);
        }
      },
      error: () => {
        task.status = oldStatus;
      }
    });
  }

  openTask(task: TaskDTO) {
    this.router.navigate(['/task', task.id]);
  }

  loadProject() {
    this.projectService.getById(this.projectId).subscribe(project => {
      this.board.name = project.name;
      this.board.description = project.description;
    });
  }

  loadTasks() {
    this.taskService.getTasksForProject(this.projectId).subscribe(tasks => {
      const columnsMap: Record<string, TaskDTO[]> = {
        TODO: [],
        IN_PROGRESS: [],
        DONE: []
      };

      for (const task of tasks) {
        if (task.status === 'DONE') continue; // ← фільтр

        const status = task.status || 'TODO';
        if (columnsMap[status]) {
          columnsMap[status].push(task);
        }
      }

      this.board.columns = [
        new Column('TODO', columnsMap.TODO),
        new Column('IN_PROGRESS', columnsMap.IN_PROGRESS),
        new Column('DONE', []) // пустий, бо ми їх не відображаємо
      ];
    });
  }


  openCreateTaskModal() {
    const summary = prompt('Заголовок задачі');
    const description = prompt('Опис задачі');
    const task = {
      summary: summary || '',
      description: description || '',
      status: 'TODO' as TaskStatus,
      assigneeId: null,
      initiatorId: null,
      projectId: this.projectId
    };

    this.taskService.createTask(task).subscribe(() => this.loadTasks());
  }

}
