import {Component, OnInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<p>Hello Angular 2</p>
               <child-comp [name]="name"></child-comp>
               <input type="text" [(ngModel)]="name"/>
               <input type="number" [(ngModel)]="age"/>`
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {
    name:string = "Tom";
    age:number = 25;

    constructor(){this.log(`constructor`);}
    ngOnInit(){this.log(`onInit`);}

    ngOnChanges(changes: SimpleChanges) {
        for(let propName in changes) {
            let chng =changes[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }

    ngOnDestroy(){this.log(`onDestroy`);}

    private log(msg:string) {
        console.log(msg);
    }
}