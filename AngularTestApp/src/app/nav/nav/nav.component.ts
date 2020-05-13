import { registerLocaleData } from '@angular/common';
import { AuthService } from './../../services/auth.service';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { User } from './../../classes/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faUSerAstronaut = faUserAstronaut;

  email: string;
  isUserLoggedIn = false;

  @Output() onNewUser = new EventEmitter();
  
  constructor(private auth: AuthService,
    private router: Router) {
      auth.userSignedIn.subscribe((user: User) => {
        this.email = user.email;
        this.isUserLoggedIn = true;
      });
      auth.userLoggedOut.subscribe(() => {
        this.email = '';
        this.isUserLoggedIn = false;
      });
      auth.userSignedUp.subscribe((user: User) => {
        this.email = user.email;
        
        console.log(this.email);
        this.isUserLoggedIn = true;
      });
     }

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
    /*
    if(this.isUserLoggedIn) {
      const user = this.auth.getUser()
      this.email = user.email;
    }
    */
  }

  newUser() {
   this.onNewUser.emit();
  }

  signIn(e) {
    e.preventDefault();
    this.router.navigate(['login']);
  }

  signUp(e) {
    e.preventDefault();
    this.router.navigate(['signup']);
  }

  logout(e) {
    e.preventDefault();
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
