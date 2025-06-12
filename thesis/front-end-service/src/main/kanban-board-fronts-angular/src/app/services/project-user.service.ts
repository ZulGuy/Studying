import { Injectable } from '@angular/core';
import{BehaviorSubject, Observable, of} from "rxjs";

export interface UserWithRoles {
  id: string;
  name: string;
  email: string;
  roles: string[];
}
@Injectable({
  providedIn: 'root'
})
export class ProjectUserService {
  private users: UserWithRoles[] = [
    { id: '1', name: 'Іван Іванов', email: 'ivan@example.com', roles: ['admin', 'editor'] },
    { id: '2', name: 'Марія Петренко', email: 'maria@example.com', roles: ['viewer'] },
    { id: '3', name: 'Олег Сидоренко', email: 'oleg@example.com', roles: ['editor'] }
  ];

  private users$ = new BehaviorSubject<UserWithRoles[]>([...this.users]);

  constructor() { }

  getProjectUsers(projectId: string): Observable<UserWithRoles[]> {
    return this.users$.asObservable();
  }

  addRole(userId: string, role: string) {
    const user = this.users.find(u => u.id === userId);
    if(user && !user.roles.includes(role)) {
      user.roles.push(role);
      this.users$.next([...this.users]);
    }
  }

  removeRole(userId: string, role: string) {
    const user = this.users.find(u => u.id === userId);
    if(user) {
      user.roles = user.roles.filter(r => r !== role);
      if(user.roles.length === 0) {
        this.users = this.users.filter(u => u.id !== userId);
      }
      this.users$.next([...this.users]);
    }
  }

  addUserToProject(user: { id: string, name: string, email: string }, role: string) {
    const existing = this.users.find(u => u.id === user.id);
    if(!existing) {
      this.users.push({...user, roles: [role]});
    } else if(!existing.roles.includes(role)) {
      existing.roles.push(role);
    }
    this.users$.next([...this.users]);
  }

  getAllUsers(): Observable<{id:string; name: string; email: string}[]> {
    return of([
      { id: '1', name: 'Іван Іванов', email: 'ivan@example.com' },
      { id: '2', name: 'Марія Петренко', email: 'maria@example.com' },
      { id: '3', name: 'Олег Сидоренко', email: 'oleg@example.com' },
      { id: '4', name: 'Анна Коваль', email: 'anna@example.com' },
    ]);
  }
}
