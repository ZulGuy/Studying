import { Component} from '@angular/core';
import {AppCounterService} from "./services/app-counter.service";
import {LocalCounterService} from "./services/local-counter.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [LocalCounterService]
})
export class AppComponent {
    constructor(public appCounterService: AppCounterService, public localCounterService: LocalCounterService) {}
}