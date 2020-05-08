import { ILogin } from './../interfaces/ilogin';

export class Login implements ILogin {
    password: string;
    username: string;

    constructor(passw: string, username: string) {
        this.password = passw;
        this.username = username;
    }
}