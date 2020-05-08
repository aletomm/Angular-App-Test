import { IUser } from './../interfaces/iuser';
import { UserService } from '../services/user.service';
 
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    @Input() users: IUser[] = [];

    @Output() updateUser = new EventEmitter<IUser>();
    
    constructor(private userService: UserService) { }

    ngOnInit() {
        
    }

    onDeleteUser(user: IUser) {
        this.userService.deleteUser(user);
    }

    onSelectUser(user: IUser) {
        this.updateUser.emit(user);
    }
}