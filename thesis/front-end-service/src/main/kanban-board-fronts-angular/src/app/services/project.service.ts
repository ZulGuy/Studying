import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

export interface Project {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  constructor() {
  }

  private currentProjectSubject = new BehaviorSubject<Project>( {
    name: 'Thesis CRM',
    description: 'Система керування студентськими заявками'
  });

  getProject(): Observable<Project> {
    return this.currentProjectSubject.asObservable();
  }

  setProject(updatedProject: Project) {
    this.currentProjectSubject.next({...updatedProject});
  }

}
