import { User } from './../classes/user';
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

  constructor(private authService: AuthService, private router: Router) { 
    // Da rimuovere se viene inserita la promise del matodo signUp
    this.authService.userSignedUp.subscribe( (user: User) => {
      router.navigate(['']);
    });
  }

  ngOnInit(): void {
  }

  /*async*/ signUp(form: NgForm) {
    if(!form.valid) {
      return false;
    }
    /*
      try {
        const res = await this.authService.signUp(
          form.value.username,
          form.value.email, 
          form.value.password)
          .toPromise(); 
        this.router.navigate(['']);  
      } catch(e) {
        switch(e.status) {
          case 401:
            break;
        }
      }
    */
    const res = this.authService.signUp(
      form.value.username,
      form.value.email, 
      form.value.password
      );
    }
}
