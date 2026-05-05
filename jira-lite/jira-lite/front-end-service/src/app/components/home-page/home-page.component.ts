import { Component, OnInit } from '@angular/core';
import {RecentProjectService} from "../../services/recent-project.service";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [CommonModule, RouterLink]
})
export class HomePageComponent implements OnInit {
  recentProject: { id: string; name: string; description: string } | null = null;

  constructor(private recentProjectService: RecentProjectService) {}

  ngOnInit(): void {
    this.recentProject = this.recentProjectService.getRecentProject();
  }

}
