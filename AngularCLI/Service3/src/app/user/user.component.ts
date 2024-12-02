import{Component, OnInit} from "@angular/core";
import{UserService} from "./user.service";
import {Observable, Subscription} from "rxjs";
import { map } from 'rxjs/operators';

@Component({
    selector: 'user-comp',
    templateUrl: './user.component.html',
    styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {
    users: any[] = [];
    private subscription: Subscription | undefined;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.subscription = this.userService.getUsers().subscribe({
            next: (users: any[]) => {
                this.users = users;
            }});
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}