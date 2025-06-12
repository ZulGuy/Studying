import { Component, OnInit } from '@angular/core';
import  {ProjectUserService, UserWithRoles} from "../../services/project-user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  projectId: string;
  projectUsers: UserWithRoles[] = [];
  selectedUser: UserWithRoles | null = null;
  addingUser = false;

  constructor(private projectUserService: ProjectUserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.loadUsers();
  }

  loadUsers() {
    this.projectUserService.getProjectUsers(this.projectId)
    .subscribe(users => this.projectUsers = users);
  }

  openRoleModal(user: UserWithRoles) {
    this.selectedUser = user;
  }


  openAddUserModal() {
    this.addingUser = true;
  }

}
