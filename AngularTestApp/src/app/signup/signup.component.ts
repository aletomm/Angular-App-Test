import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp(form: NgForm) {
    if(!form.valid) {
      return false;
    }
    const res = this.authService.signUp(
      form.value.username,
      form.value.email, 
      form.value.password
      );
    if(res) {
      this.router.navigate(['']);
    }
      
  }
}
