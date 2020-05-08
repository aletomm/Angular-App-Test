import { IUser } from './../interfaces/iuser';
import { Injectable } from '@angular/core';


@Injectable()
export class UserService {

    users: IUser[] = [];
    constructor() {}

    async getUsers(num: number = 15) {
         return fetch('https://randomuser.me/api/?results='+num+"&inc=name,email,login,phone,location")
             .then((res) => res.json())
             .then(users => {
                this.users = users.results; 
                console.log(users.results);
                return users.results;

             })
             .catch(err => console.log(err));
    }

    deleteUser(user) {
        let index = this.users.indexOf(user) 
        if(index >= 0) {
            this.users.splice(index, 1);
        }
    }
}