import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {ProjectDTO} from '../../types/api.types';
import {AuthService} from "../../services/auth.service";
import {ProjectUserService} from "../../services/project-user.service";

@Component({
  standalone: false,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  project: ProjectDTO | null = null;
  isCollapsed = false;
  projectId: string;
  currentUser: any;
  projectUsers: any[] = [];
  canManageProject = false;

  links = [
    {label: 'Дошка', path: '', icon: '📋'},
    {label: 'Усі задачі', path: 'all-tasks', icon: '🗂️'},
    {label: 'Звіти', path: 'reports', icon: '📊'},
    {label: 'Налаштування', path: 'settings', icon: '⚙️'}
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private projectService: ProjectService,
    private projectUserService: ProjectUserService,
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }


  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(() => {
      const id = this.route.firstChild?.snapshot.paramMap.get('id');
      this.projectId = id;

      this.projectService.getById(+this.projectId).subscribe(project => {
        this.project = project;
      });

      this.projectUserService.getProjectUsers(+this.projectId).subscribe(users => {
        this.projectUsers = users;

        const current = this.currentUser;
        const systemAdmin = current?.role === 'ADMIN';

        const projectUser = users.find(u => u.id === current?.id);
        const projectAdmin = projectUser?.roles.includes('ADMIN');

        this.canManageProject = systemAdmin || projectAdmin;
      });
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
