import { Component, OnInit } from '@angular/core';
import {User, UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  paginatedUsers: User[] = [];

  searchTerm = '';
  usersPerPage = 10;
  currentPage = 1;
  totalPages = 1;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(u => {
      this.users = u;
      this.filterUsers();
    });
  }

  filterUsers() {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredUsers = this.users.filter(user =>
    user.name.toLowerCase().includes(term) ||
    user.email.toLowerCase().includes(term) ||
    user.username.toLowerCase().includes(term)
    );

    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredUsers.length / this.usersPerPage);
    const start = (this.currentPage - 1) * this.usersPerPage;
    const end = start + this.usersPerPage;
    this.paginatedUsers = this.filteredUsers.slice(start, end);
  }

  prevPage() {
    if(this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if(this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  goToUser(id: string) {
    this.router.navigate(['/users', id]);
  }

}
