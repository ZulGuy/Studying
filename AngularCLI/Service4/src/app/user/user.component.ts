import{Component, OnInit} from "@angular/core";
import{UserService} from "./user.service";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';

@Component({
    selector: 'user-comp',
    templateUrl: './user.component.html',
    styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {
    users: Observable<Object> | undefined;
    name:string;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.users = this.userService.getUsers().pipe(
            map((users: any[]) => users.filter(user => user.id % 2 === 0)));
    }

    onNameChange() {
        this.users = this.userService.getUsers().pipe(
            map((users: any[]) => users.filter(user => user.id % 2 === 0 && user.name.toLowerCase().includes(this.name.toLowerCase()))));
    }
}