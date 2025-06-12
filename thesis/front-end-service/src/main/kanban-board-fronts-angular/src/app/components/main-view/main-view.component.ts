import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Board} from "../../models/board.model";
import {Column} from "../../models/column.model";
import {ProjectService} from "../../services/project.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router) { }

  board: Board = new Board('Test Board', [
    new Column('Todo', [
      'Some random task',
      'This is another task'
    ]),
    new Column('In progress', [
      'Task A',
      'Task B',
      'Task C'
    ]),
    new Column('Done', [
      'Task D',
      'Task E'
    ])
  ]);

  ngOnInit(): void {
    this.projectService.getProject().subscribe(project => {
      this.board.name = project.name;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  openTask(task: string, column: Column, idx: number) {
    this.router.navigate(['/task', `${column.name}-${idx}`]);
  }
}
