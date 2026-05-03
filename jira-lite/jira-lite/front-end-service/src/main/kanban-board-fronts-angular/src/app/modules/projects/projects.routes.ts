import { Routes } from '@angular/router';
import { ProjectsListComponent } from './projects-list.component';
import { ProjectBoardComponent } from './project-board.component';
import { ProjectLayoutComponent } from './layouts/project-layout/project-layout.component';
import { AllTasksComponent } from '../../components/all-tasks/all-tasks.component';
import { ReportsComponent } from '../../components/reports/reports.component';
import { SettingsComponent } from '../../components/settings/settings.component';

export const projectsRoutes: Routes = [
  { path: '', component: ProjectsListComponent },
  {
    path: ':id',
    component: ProjectLayoutComponent,
    children: [
      { path: '', component: ProjectBoardComponent },
      { path: 'all-tasks', component: AllTasksComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
];
