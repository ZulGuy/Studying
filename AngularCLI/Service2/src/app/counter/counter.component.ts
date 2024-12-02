import { Component} from '@angular/core';
import {AppCounterService} from "../services/app-counter.service";
import {LocalCounterService} from "../services/local-counter.service";

@Component({
    selector: 'counter-comp',
    templateUrl: './counter.component.html',
    providers: [LocalCounterService]
})
export class CounterComponent {
    constructor(public appCounterService: AppCounterService, public localCounterService: LocalCounterService) {}
}