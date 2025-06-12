import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProjectService, Project } from '../../services/project.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  project: Project | null = null;
  isCollapsed = false;
  projectId: string;

  links = [
    { label: 'Дошка', path: '', icon: '📋' },
    { label: 'Звіти', path: 'reports', icon: '📊' },
    { label: 'Налаштування', path: 'settings', icon: '⚙️' }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}


  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(() => {
      const id = this.route.firstChild?.snapshot.paramMap.get('id');
    this.projectId = id;
      console.log('Sidebar received project ID:', this.projectId);
    });
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  isActive(path: string): boolean {
    const currentUrl = this.router.url;
    return currentUrl.endsWith('/' + path) || (path === '' && /\/projects\/\d+\/?$/.test(currentUrl));

  }

}
