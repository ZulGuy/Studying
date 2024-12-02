import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {DataComponent} from "./data.component";
import {DataService} from "./data.service";
import {LogService} from "./log.service";
@NgModule({
 imports: [ BrowserModule, FormsModule],
 declarations: [AppComponent, DataComponent],
 providers:[DataService, LogService],
 bootstrap: [ AppComponent ]
})
export class AppModule {}
