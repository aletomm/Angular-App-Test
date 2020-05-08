import { IUser } from './../interfaces/iuser';
import { Location } from '../classes/location';
import { Login } from '../classes/login';
import { Name } from '../classes/name';
import { Street } from './street';

export class User implements IUser {
    id: number;
    email: string;
    location: Location;
    login?: Login;
    name: Name;
    phone?: string;

    constructor() {
        this.id = 0;
        this.email = '';
        this.location = new Location('','',-1,'', new Street('', -1));
        this.login = new Login('','');
        this.name = new Name('','', '');
        this.phone = '';
    }
}