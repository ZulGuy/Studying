import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from "./user/user.component";
@NgModule({
 imports: [ BrowserModule, FormsModule, HttpClientModule],
 declarations: [AppComponent, UserComponent],
 bootstrap: [ AppComponent ]
})
export class AppModule {}
