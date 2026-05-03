import {Component, Input, OnInit} from '@angular/core';
import  {ProjectUserService} from "../../services/project-user.service";
import {ActivatedRoute} from "@angular/router";
import {ProjectUserDTO, UserDTO} from "../../types/api.types";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RoleModalComponent} from "../role-modal/role-modal.component";
import {AddUserModalComponent} from "../add-user-modal/add-user-modal.component";

@Component({
  standalone: true,
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [CommonModule, FormsModule, RoleModalComponent, AddUserModalComponent]
})
export class SettingsComponent implements OnInit {
  projectId: number | null = null;
  @Input() currentProjectId!: number;
  projectUsers: ProjectUserDTO[] = [];
  selectedUser: ProjectUserDTO | null = null;
  currentUserId: number;
  addingUser = false;
  user: UserDTO | null = null;
  canManage: boolean = false;

  constructor(private projectUserService: ProjectUserService, private route: ActivatedRoute, private authService: AuthService, private userService: UserService) {
    this.currentUserId = this.authService.getCurrentUser()?.id!;
  }

  ngOnInit() {
    this.route.parent?.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (!idParam || isNaN(+idParam)) return;

      this.projectId = +idParam;

      // 🔁 Спочатку отримаємо поточного користувача
      this.userService.getCurrentUser().subscribe(user => {
        this.user = user;

        // 🔁 Тепер завантажимо користувачів проекту
        this.projectUserService.getProjectUsers(this.projectId!).subscribe(users => {
          this.projectUsers = users;
          this.canManage = this.checkManageAccess();

          console.log('[DEBUG] user:', this.user); // Тепер точно буде видно
          console.log('[DEBUG] role:', this.user?.role);
        });
      });
    });
  }




  loadUsers() {
    if (!this.projectId) return;

    this.projectUserService.getProjectUsers(this.projectId).subscribe(users => {
      this.projectUsers = users;
      this.canManage = this.checkManageAccess(); // Не забувай оновити флаг
      console.log('[DEBUG] Loaded project users:', this.projectUsers);
    });
  }

  openRoleModal(user: ProjectUserDTO) {
    this.selectedUser = user;
  }

  openAddUserModal() {
    this.addingUser = true;
  }

  checkManageAccess(): boolean {
    if (!this.user) return false;
    console.log('user:', this.user);
    console.log('role:', this.user.role);
    if (this.user.role === 'ROLE_ADMIN') return true;
    const pu = this.projectUsers.find(u => u.id === this.user!.id);
    return pu?.roles?.includes('ADMIN') ?? false;
  }


}
