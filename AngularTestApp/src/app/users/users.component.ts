import { UserService } from './user.service';
 
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users = [];
    
    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getUsers(15)
        .then((res) => {
            this.users = res;
        });
    }

}