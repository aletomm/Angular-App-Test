import { UserService } from './services/user.service';
import { IUser } from './interfaces/iuser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'User Management System';
  userSelected: IUser = null;
  
  users: IUser[] = [];

  constructor(private userService: UserService) {

  }

  updateUser(user: IUser) {
    this.userSelected = user;
  }

  ngOnInit() {
    this.userService.getUsers(15)
        .then((res) => {
            this.users = res;
        });
  }
}
