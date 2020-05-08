import { ILocation } from './ilocation';
import { ILogin } from './ilogin';
import { IName } from './iname';

export interface IUser {
    id: number;
    email: string;
    location: ILocation;
    login?: ILogin;
    name: IName;
    phone?: string;
}
