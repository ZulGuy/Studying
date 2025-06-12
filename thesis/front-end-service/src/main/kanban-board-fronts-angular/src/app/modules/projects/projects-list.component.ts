import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  projects = [
    {id:1, name: 'Thesis CRM'},
    {id:2, name: 'Inventory Tracker'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  openProject(id:string){
    this.router.navigate(['/projects', id]);
  }
}
