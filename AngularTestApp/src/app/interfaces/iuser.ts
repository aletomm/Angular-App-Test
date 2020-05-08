import { ILocation } from './ilocation';
import { ILogin } from './ilogin';
import { IName } from './iname';

export interface IUser {
    email: string;
    location: ILocation;
    login: ILogin;
    name: IName;
    phone: string;
}
