import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UserWithRoles, ProjectUserService} from "../../services/project-user.service";

@Component({
  selector: 'app-role-modal',
  templateUrl: './role-modal.component.html',
  styleUrls: ['./role-modal.component.scss']
})
export class RoleModalComponent {
  @Input() user: UserWithRoles;
  @Output() close = new EventEmitter<void>();
  @Output() rolesChanged = new EventEmitter<void>();

  availableRoles = ['admin', 'editor', 'viewer'];
  selectedRole = '';

  constructor(private projectUserService: ProjectUserService) { }

  removeRole(role: string) {
    this.projectUserService.removeRole(this.user.id, role);
    this.rolesChanged.emit();
  }

  addRole() {
    if(this.selectedRole && !this.user.roles.includes(this.selectedRole)) {
      this.projectUserService.addRole(this.user.id, this.selectedRole);
      this.selectedRole = '';
      this.rolesChanged.emit();
    }
  }

  closeModal() {
    this.close.emit();
  }

}
