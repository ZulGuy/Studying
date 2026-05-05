import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from "../../services/project.service";
import { ProjectDTO } from "../../types/api.types";
import { CommonModule } from "@angular/common";
import { MainViewComponent } from "../../components/main-view/main-view.component";

@Component({
  standalone: true,
  selector: 'app-projects-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss'],
  imports: [CommonModule, MainViewComponent]
})
export class ProjectBoardComponent implements OnInit {
  project: ProjectDTO | null = null;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!id) return;
      this.projectService.getById(+id).subscribe(data => {
        this.project = data;
        this.projectService.setProject(data);
      });
    });
  }
}
