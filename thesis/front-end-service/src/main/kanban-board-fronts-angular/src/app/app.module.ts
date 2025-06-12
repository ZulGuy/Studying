import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { TaskComponent } from './components/task/task.component';
import { UserComponent } from './components/user/user.component';
import {FormsModule} from "@angular/forms";
import { RoleModalComponent } from './components/role-modal/role-modal.component';
import { AddUserModalComponent } from './components/add-user-modal/add-user-modal.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ReportsComponent,
    SettingsComponent,
    HomePageComponent,
    ProfileComponent,
    UsersComponent,
    TaskComponent,
    UserComponent,
    RoleModalComponent,
    AddUserModalComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
