import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { TaskDTO, TaskStatus } from '../../types/api.types';
import {Chart, ChartData, ChartType, registerables} from 'chart.js';
import { Subscription } from 'rxjs';
import {CommonModule} from "@angular/common";
import {BaseChartDirective} from "ng2-charts";

@Component({
  standalone: true,
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  imports: [CommonModule, BaseChartDirective]
})
export class ReportsComponent implements OnInit, OnDestroy {
  tasks: TaskDTO[] = [];
  statusCounts: Record<TaskStatus, number> = { TODO: 0, IN_PROGRESS: 0, DONE: 0 };

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['To Do', 'In Progress', 'Done'],
    datasets: [{
      data: [0, 0, 0],
      backgroundColor: ['#6e7681', '#58a6ff', '#3fb950'],
      borderColor: '#161b22',
      borderWidth: 2,
      hoverOffset: 6
    }]
  };

  public doughnutChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#8b949e',
          padding: 16,
          font: { size: 12, family: 'Inter, sans-serif' }
        }
      }
    }
  };

  private routeSub!: Subscription;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.parent?.paramMap.subscribe(params => {
      const projectId = +params.get('id')!;
      if (!isNaN(projectId)) {
        this.loadTasks(projectId);
      }
    });
    Chart.register(...registerables);
  }

  loadTasks(projectId: number): void {
    this.taskService.getTasksForProject(projectId).subscribe(tasks => {
      this.tasks = tasks;
      this.countStatuses();
      this.updateChart();
    });
  }

  countStatuses(): void {
    this.statusCounts = { TODO: 0, IN_PROGRESS: 0, DONE: 0 };
    this.tasks.forEach(t => {
      if (t.status in this.statusCounts) {
        this.statusCounts[t.status]++;
      }
    });
  }

  updateChart(): void {
    this.doughnutChartData = {
      ...this.doughnutChartData,
      datasets: [{
        ...this.doughnutChartData.datasets[0],
        data: [this.statusCounts.TODO, this.statusCounts.IN_PROGRESS, this.statusCounts.DONE]
      }]
    };
  }

  getPercent(count: number): number {
    if (!this.tasks.length) return 0;
    return Math.round(count / this.tasks.length * 100);
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}
