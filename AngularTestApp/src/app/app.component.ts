import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'User Management System';
  userSelected: User = new User();
  showForm: boolean = false;
  users: User[] = [];

  constructor(private userService: UserService) {

  }

  hideForm(flag: boolean) {
    this.showForm = !flag;
  }

  updateUser(user: User) {
    this.userSelected = user;
    this.showForm = true;
  }

  newUser() {
    this.userSelected = new User();
    this.showForm = true;
  }

  ngOnInit() {
    this.users = this.userService.getUsers(15);
  }
}
