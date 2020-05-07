import { Injectable } from '@angular/core';


@Injectable()
export class UserService {

    constructor() {}

    async getUsers(num: number = 15) {
         return fetch('https://randomuser.me/api/?results='+num)
             .then((res) => res.json())
             .then(users => users.results)
             .catch(err => console.log(err));
    }
}