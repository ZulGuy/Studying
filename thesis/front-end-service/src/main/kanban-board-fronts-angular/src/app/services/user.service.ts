import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  groups: string[];
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      id: '1',
      name: 'Emma',
      username: 'emma',
      email: 'emma@atlas.com',
      groups: ['users'],
      active: true
    },
    {
      id: '2',
      name: 'Jason',
      username: 'jason',
      email: 'jason@atlas.com',
      groups: ['users'],
      active: false
    },
    {
      id: '3',
      name: 'Tomek',
      username: 'admin',
      email: 'tomek@atlas.com',
      groups: ['admins', 'users'],
      active: true
    },
    {
      id: '4',
      name: 'Emma',
      username: 'emma',
      email: 'emma@atlas.com',
      groups: ['users'],
      active: true
    },
    {
      id: '5',
      name: 'Jason',
      username: 'jason',
      email: 'jason@atlas.com',
      groups: ['users'],
      active: false
    },
    {
      id: '6',
      name: 'Tomek',
      username: 'admin',
      email: 'tomek@atlas.com',
      groups: ['admins', 'users'],
      active: true
    },
    {
      id: '7',
      name: 'Emma',
      username: 'emma',
      email: 'emma@atlas.com',
      groups: ['users'],
      active: true
    },
    {
      id: '8',
      name: 'Jason',
      username: 'jason',
      email: 'jason@atlas.com',
      groups: ['users'],
      active: false
    },
    {
      id: '9',
      name: 'Tomek',
      username: 'admin',
      email: 'tomek@atlas.com',
      groups: ['admins', 'users'],
      active: true
    },
    {
      id: '10',
      name: 'Emma',
      username: 'emma',
      email: 'emma@atlas.com',
      groups: ['users'],
      active: true
    },
    {
      id: '11',
      name: 'Jason',
      username: 'jason',
      email: 'jason@atlas.com',
      groups: ['users'],
      active: false
    },
    {
      id: '12',
      name: 'Tomek',
      username: 'admin',
      email: 'tomek@atlas.com',
      groups: ['admins', 'users'],
      active: true
    }
  ];
  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUserById(id: string): Observable<User> {
    return of(this.users.find(user => user.id == id));
  }

  toggleActive(id: string) {
    const user = this.users.find(u => u.id == id);
    if(user) user.active = !user.active;
  }

  getCurrentUser(): Observable<User> {
    return of(this.users[0]);
  }
}
