import { User } from './../classes/user';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService, private router: Router) {
   }

  ngOnInit(): void { }

  /*async*/ signIn(form: NgForm) {
    if(!form.valid) {
      return false;
    }
    /*
    try { 
      const resp = await this.authService.signIn(form.value.email, form.value.password)
        .toPromise();
      this.router.navigate(['']);
    } catch(e) {
      switch (e.status){
        case 401: 
          break;
        case 404:
          break; 
        case 500:
          break;  
      }
    }
    */
   this.authService.signIn(form.value.email, form.value.password);
  }
}


