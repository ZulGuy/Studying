import{Input, Component} from '@angular/core';
@Component({
    selector: 'child-comp',
    template: `<ng-content></ng-content>
               <h2>Привіт {{name}}</h2>
               <p>Ім'я користувача: {{userName}}</p>
               <p>Вік користувача: {{userAge}}</p>`,
    styles: [`h2, p{color:blue;}`]
})
export class ChildComponent {
    name="Тарас";
    @Input() userName: string = "";
    @Input() userAge: number = 0;
}