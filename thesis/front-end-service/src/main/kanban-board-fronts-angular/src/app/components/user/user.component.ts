import { Component, OnInit } from '@angular/core';
import {User, UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe(u => this.user = u);
  }

  toggleActive() {
    this.userService.toggleActive(this.user.id);
  }

}
