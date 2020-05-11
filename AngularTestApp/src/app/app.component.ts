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
  date: Date = new Date();
  userSelected: User = new User();
  showForm: boolean = false;

  constructor(private userService: UserService) {

  }
/*
  updateUser(user: User) {
    this.userSelected = user;
    this.showForm = true;
  }

  newUser() {
    this.userSelected = new User();
    this.showForm = true;
  }
  */

  ngOnInit() {
  }
}
