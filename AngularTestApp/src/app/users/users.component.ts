import { User } from './../classes/user';
import { UserService } from '../services/user.service';
import * as $ from 'jquery';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: User[] = [];

    @Output() updateUser = new EventEmitter<User>();
    
    constructor(private userService: UserService) { }

    ngOnInit() {
        //  this.userService.getUsers(15)
        // .subscribe(res => this.users = res['data']);
        this.users = this.userService.getUsers(15);
    }

    onDeleteUser(user: User) {
        /*
            this.userService.deleteUser(user)
                .subscribe((res) => {
                    const index = this.users.indexof(user);
                    this.users.splice(index, 1);
                }
            );
        */
        this.userService.deleteUser(user);
    }

    onSelectUser(user: User) {
        const usrCopy = $.extend(true, {}, user);
        this.updateUser.emit(usrCopy);
    }
}