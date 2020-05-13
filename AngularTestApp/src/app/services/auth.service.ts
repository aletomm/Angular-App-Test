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
    /*
      this.http.post(this.APIAUTHURL+'login',
      {
        email: email,
        password: password
      }  
      ).pipe(tap((res) => {
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('user', JSON.stringify(res));
        let user: User = new User();
        user.email = email;
        user.login.password = password;
        this.userSignedIn.emit(user);
        return true;
      });
    */
    localStorage.setItem('token', email);
    let user: User = new User();
    user.email = email;
    user.login.password = password;
    this.userSignedIn.emit(user);
    return true;
  }

  signUp(username: string, email: string, password: string) {
    
     /*
      return this.http.post(this.APIAUTHURL+'signup',
      {
        email: email,
        password: password
        username. username
      }  
      ).pipe(tap((res) => {
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('user', JSON.stringify(res));
        let user: User = new User();
        user.email = email;
        user.login.password = password;
        user.login.username = username;
        this.userSignedUp.emit(user);
        return true;
          })
        );
      */
    
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
    //localStorage.removeItem('user');
    this.userLoggedOut.emit();
    this._isUserLogged = false;
  }

  getUser(): User {
    const data = JSON.parse(localStorage.getItem('user'));
    let user = new User();
    if(data) {
      user.email = data['email'];
    }
    return user;
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
