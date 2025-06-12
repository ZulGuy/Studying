import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import {SharedModule} from "./shared/shared.module";
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {FormsModule} from "@angular/forms";
import { RoleModalComponent } from './components/role-modal/role-modal.component';
import { AddUserModalComponent } from './components/add-user-modal/add-user-modal.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { LoginComponent } from './components/login/login.component';
import { CommentsComponent } from './components/comments/comments.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TenantInterceptor} from "./services/tenant.interceptor";
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { RegisterInviteComponent } from './components/register-invite/register-invite.component';
import { InviteUserComponent } from './components/invite-user/invite-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ReportsComponent,
    SettingsComponent,
    HomePageComponent,
    ProfileComponent,
    UsersComponent,
    UserComponent,
    RoleModalComponent,
    AddUserModalComponent,
    TaskDetailComponent,
    LoginComponent,
    CommentsComponent,
    LogoutComponent,
    RegisterComponent,
    AllTasksComponent,
    RegisterInviteComponent,
    InviteUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TenantInterceptor, multi: true }
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
