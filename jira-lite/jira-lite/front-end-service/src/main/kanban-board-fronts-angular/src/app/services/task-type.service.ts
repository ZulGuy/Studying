import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TaskTypeDTO, TaskDTO } from '../types/api.types';

@Injectable({ providedIn: 'root' })
export class TaskTypeService {
  private api = `${environment.apiUrl}/api/task-types`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<TaskTypeDTO[]> {
    return this.http.get<TaskTypeDTO[]>(this.api, { withCredentials: true });
  }

  getByName(name: string): Observable<TaskTypeDTO> {
    return this.http.get<TaskTypeDTO>(`${this.api}/${name}`, { withCredentials: true });
  }

  add(name: string): Observable<void> {
    return this.http.post<void>(this.api, name, { withCredentials: true });
  }

  getTasksByType(name: string): Observable<TaskDTO[]> {
    return this.http.get<TaskDTO[]>(`${this.api}/${name}/tasks`, { withCredentials: true });
  }
}
