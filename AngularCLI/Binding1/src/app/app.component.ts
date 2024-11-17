import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<p>Ім'я: {{name}}</p>
               <p>Вік: {{age}}</p>
               <input type="text" [value]="name"/>
               <input type="text" [value]="age"/>
               <p [textContent]="name"></p>
               <table border="1">
                   <tr><td [attr.colspan]="colspan">One-Two</td></tr>
                   <tr><td>Three</td><td>Four</td></tr>
                   <tr><td>Five</td><td>Six</td></tr>
               </table>
               <p>Кількість кліків {{count}}</p>
               <button (click)="increase()">Click</button>
               <p>Кількість кліків {{count_2}}</p>
               <button (click)="increase_2($event)">Click</button>
               <p>Привіт{{name_2}}</p>
               <input type="text" [(ngModel)]="name_2"/><br/>
               <input type="text" [attr.value]="name_2"/>`
})
export class AppComponent {
    name = 'Tom';
    age = 25;
    colspan = 2;
    count: number = 0;
    count_2: number = 0;
    name_2 = 'James';
    increase() : void {
        this.count++;
    }
    increase_2($event:any) : void {
        this.count_2++;
        console.log($event);
    }
}