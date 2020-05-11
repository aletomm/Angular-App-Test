import { User } from './../classes/user';
import { UserService } from '../services/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserEdit, faTrashAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'tr [app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  faUserEdit = faUserEdit;
  faTrashAlt = faTrashAlt;
  faInfoCircle = faInfoCircle;

  @Input('user-data') user: User;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') userSelected = new EventEmitter();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteUser() {
    //this.userService.deleteUser(this.user);
    this.userDeleted.emit(this.user);
  }

  updateUser() {
    this.userSelected.emit(this.user);
    this.router.navigate(['users', this.user.id, 'edit']);
  }

  showUser() {
    this.router.navigate(['users', this.user.id]);
  }
}
