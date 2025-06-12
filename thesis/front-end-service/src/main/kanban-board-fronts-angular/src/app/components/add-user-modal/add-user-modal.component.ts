import { Component, EventEmitter, Output} from '@angular/core';
import {ProjectUserService} from "../../services/project-user.service";

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss']
})
export class AddUserModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() userAddedToProject = new EventEmitter<void>();

  allUsers: any[] = [];
  filteredUsers: any[] = [];
  selectedUserId: string = '';
  selectedRole: string = '';
  searchTerm: string = '';

  availableRoles = ['admin', 'editor', 'viewer'];

  constructor(private projectUserService: ProjectUserService) {
    this.loadUsers();
  }

  loadUsers() {
    this.projectUserService.getAllUsers().subscribe(users => {
      this.allUsers = users;
      this.filteredUsers = users;
    });
  }

  filterUsers(): void {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      this.filteredUsers = [...this.allUsers];
    } else {
      this.filteredUsers = this.allUsers.filter(user =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
      );
    }
  }


  addUser(): void {
    console.log('➡ addUser clicked');

    if (this.selectedUserId && this.selectedRole) {
      const user = this.allUsers.find(u => u.id === this.selectedUserId);
      console.log('➡ Found user:', user);

      if (user) {
        this.projectUserService.addUserToProject(user, this.selectedRole);
        this.userAddedToProject.emit();
        this.closeModal();
      }
    } else {
      console.warn('⛔ Не вибрано користувача або роль');
    }
  }


  closeModal() {
    this.close.emit();
  }

}
