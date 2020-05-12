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

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn(form: NgForm) {
    if(!form.valid) {
      return false;
    }
   const res = this.authService.signIn(form.value.email, form.value.password);
   if(res) {
     this.router.navigate(['']);
   }
  }

}
