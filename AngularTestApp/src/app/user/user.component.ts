import { IUser } from './../interfaces/iuser';
import { UserService } from '../services/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'tr [app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  faUserEdit = faUserEdit;
  faTrashAlt = faTrashAlt;

  @Input('user-data') user: IUser;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') userSelected = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  deleteUser() {
    //this.userService.deleteUser(this.user);
    this.userDeleted.emit(this.user);
  }

  updateUser() {
    this.userSelected.emit(this.user);
  }
}
