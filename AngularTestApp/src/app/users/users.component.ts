import { SorterService } from './../services/sorter.service';
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
    private _users: User[] = []; 
    
    @Input() get users {
        return this._users;
    }

    set user(val: User[]) {
        if(val) {
            this.filteredUsers = this._users = val;
        }
    }

    filteredUsers: User[] = [];

    @Output() updateUser = new EventEmitter<User>();
    
    constructor(private userService: UserService, private sorterService: SorterService) { }

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

    sort(prop: string) {
        this.sorterService.sort(this.users, prop);
    }

    filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.orderTotal.toString().indexOf(data) > -1;
            });
        } else {
            this.filteredCustomers = this.customers;
        }
        this.calculateOrders();
    }
    }
}