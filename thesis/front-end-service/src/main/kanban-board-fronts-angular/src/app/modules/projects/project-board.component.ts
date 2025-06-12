import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from "../../services/project.service";
import {RecentProjectService} from "../../services/recent-project.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-projects-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss']
})
export class ProjectBoardComponent implements OnInit {
  projectId:  string;
  sub: Subscription;

  constructor(private route: ActivatedRoute, private projectService: ProjectService,
              private recentProjectService: RecentProjectService) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id');

      const mockProjects = {
        '1': {
          name: 'Thesis CRM',
          description: 'Система керування студентськими заявками'
        },
        '2': {
          name: 'Inventory Tracker',
          description: 'Трекер запасів'
        }
      };

      if (this.projectId && mockProjects[this.projectId]) {
        console.log('[ProjectBoard] Setting project with ID:', this.projectId);
        this.projectService.setProject(mockProjects[this.projectId]);

        const project = mockProjects[this.projectId];
        if (project) {
          this.projectService.setProject(project);
          this.recentProjectService.setRecentProject({
            id: this.projectId,
            name: project.name,
            description: project.description
          });
        }

      }
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
