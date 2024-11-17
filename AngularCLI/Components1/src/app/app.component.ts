import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name = 'Петро';
    name2:string = "Tom";
    age:number = 24;
}