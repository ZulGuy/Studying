import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../../../components/sidebar/sidebar.component';
import { TopbarComponent } from '../../../../components/topbar/topbar.component';

@Component({
  standalone: true,
  selector: 'app-project-layout',
  templateUrl: './project-layout.component.html',
  styleUrls: ['./project-layout.component.scss'],
  imports: [RouterOutlet, SidebarComponent, TopbarComponent]
})
export class ProjectLayoutComponent {}
