import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { TaskDTO, TaskStatus } from '../../types/api.types';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {
  projectId!: number;
  allTasks: TaskDTO[] = [];
  filteredTasks: TaskDTO[] = [];

  filters = {
    summary: '',
    description: '',
    assignee: '',
    reporter: '',
    status: '' as TaskStatus | ''
  };

  currentPage = 1;
  itemsPerPage = 10;

  constructor(private taskService: TaskService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.projectId = +id;
        this.loadTasks();
      }
    });
  }

  loadTasks() {
    this.taskService.getTasksForProject(this.projectId).subscribe(data => {
      this.allTasks = data;
      this.applyFilters();
    });
  }

  applyFilters() {
    const { summary, description, assignee, reporter, status } = this.filters;

    this.filteredTasks = this.allTasks.filter(task => {
      return (!summary || task.summary?.toLowerCase().includes(summary.toLowerCase())) &&
        (!description || task.description?.toLowerCase().includes(description.toLowerCase())) &&
        (!assignee || task.assignee?.name?.toLowerCase().includes(assignee.toLowerCase())) &&
        (!reporter || task.initiator?.name?.toLowerCase().includes(reporter.toLowerCase())) &&
        (!status || task.status === status);
    });

    this.currentPage = 1;
  }

  get paginatedTasks(): TaskDTO[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredTasks.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredTasks.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }
}
