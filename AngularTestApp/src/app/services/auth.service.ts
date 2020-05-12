import { Injectable, EventEmitter, Output } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isUserLogged = false;
  
  @Output() userSignedIn = new EventEmitter<User>();
  @Output() userSignedUp = new EventEmitter<User>();
  @Output() userLoggedOut = new EventEmitter();
  
  constructor() { }

  isUserLoggedIn() {
    this._isUserLogged = !!localStorage.getItem('token');
    return this._isUserLogged;
  }

  signIn(email: string, password: string) {
    localStorage.setItem('token', email);
    let user: User = new User();
    user.email = email;
    user.login.password = password;
    this.userSignedIn.emit(user);
    return true;
  }

  signUp(username: string, email: string, password: string) {
    localStorage.setItem('token', email);
    let user: User = new User();
    user.email = email;
    user.login.password = password;
    user.login.username = username;
    this.userSignedUp.emit(user);
    return true;
  }

  logout() {
    localStorage.removeItem('token');
    this.userLoggedOut.emit();
    this._isUserLogged = false;
  }
}
