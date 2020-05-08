import { UserService } from './../services/user.service';
import { User } from './../classes/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  @Output() hideForm = new EventEmitter();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveUser() {
    //checkUser(this.user);
    if(this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else if(this.user.id === 0) {
      this.userService.createUser(this.user);
    }
    this.hideForm.emit(true);
  }

  resetForm(form) {
    if(this.user.id === 0) {
      this.user = new User();
    } else {
      //..................................
    }
  }

}
