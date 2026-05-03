import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InviteUserComponent } from './components/invite-user/invite-user.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterInviteComponent } from './components/register-invite/register-invite.component';
import { TaskTypeListComponent } from './components/task-type-list/task-type-list.component';
import { TaskTypeDetailsComponent } from './components/task-type-details/task-type-details.component';
import { CustomFieldListComponent } from './components/custom-field-list/custom-field-list.component';
import { CustomFieldDetailsComponent } from './components/custom-field-details/custom-field-details.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'register-invite', component: RegisterInviteComponent },

  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      {
        path: 'projects',
        loadChildren: () =>
          import('./modules/projects/projects.routes').then(m => m.projectsRoutes)
      },
      { path: 'task/:id', component: TaskDetailComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UserComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'admin/invite', component: InviteUserComponent },
      { path: 'admin/task-types', component: TaskTypeListComponent },
      { path: 'admin/task-types/:name', component: TaskTypeDetailsComponent },
      { path: 'admin/custom-fields', component: CustomFieldListComponent },
      { path: 'admin/custom-fields/:id', component: CustomFieldDetailsComponent },
      { path: 'logout', component: LogoutComponent }
    ]
  },

  { path: '**', redirectTo: '' }
];
