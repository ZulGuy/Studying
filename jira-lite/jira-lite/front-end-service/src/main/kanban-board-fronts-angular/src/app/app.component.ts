import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

const AUTH_ROUTES = ['/login', '/register', '/forgot-password', '/reset-password', '/register-invite'];

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, TopbarComponent, CommonModule]
})
export class AppComponent {
  title = 'kanban-board-fronts-angular';
  showTopbar = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.showTopbar = !AUTH_ROUTES.some(r => e.urlAfterRedirects.startsWith(r));
      });
  }
}
