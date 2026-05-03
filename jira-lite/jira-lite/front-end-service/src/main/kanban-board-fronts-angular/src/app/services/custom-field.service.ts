import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CustomFieldDTO, FieldType } from '../types/api.types';

@Injectable({ providedIn: 'root' })
export class CustomFieldService {
  private api = `${environment.apiUrl}/api/custom-fields`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<CustomFieldDTO[]> {
    return this.http.get<CustomFieldDTO[]>(this.api, { withCredentials: true });
  }

  getById(id: number): Observable<CustomFieldDTO> {
    return this.http.get<CustomFieldDTO>(`${this.api}/${id}`, { withCredentials: true });
  }

  add(dto: { name: string; fieldType: FieldType }): Observable<void> {
    return this.http.post<void>(this.api, dto, { withCredentials: true });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`, { withCredentials: true });
  }

  updateName(id: number, newName: string): Observable<void> {
    return this.http.post<void>(`${this.api}/${id}/update-name/${encodeURIComponent(newName)}`, {}, { withCredentials: true });
  }
}
