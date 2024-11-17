import {Component,
        Input,
        OnInit,
        DoCheck,
        OnChanges,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked}  from '@angular/core';
@Component({
    selector: 'child-comp',
    template: `<p>Привіт {{name}}</p>`
})
export class ChildComponent implements OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
    @Input() name:string = "";
    count:number = 1;

    ngOnInit() {this.log(`ngOnInit`);}
    ngOnChanges() {this.log(`ngOnChange`);}
    ngDoCheck() {this.log(`ngDoCheck`);}
    ngAfterContentInit() {this.log(`ngAfterContentInit`);}
    ngAfterContentChecked() {this.log(`ngAfterContentChecked`);}
    ngAfterViewInit() {this.log(`ngAfterViewInit`);}
    ngAfterViewChecked() {this.log(`ngAfterViewChecked`);}

    private log(msg:string) {
        console.log(this.count + ". " + msg);
        this.count++;
    }

}