import { UserService } from './../services/user.service';
import { User } from './../classes/user';
import * as $ from 'jquery';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private _user: User;
  private userCopy: User;

  set user(user: User){
    this._user = user;
    this.userCopy = $.extend(true, {}, user);
  }

  get user(): User{
    return this._user;
  } 

  @Output() hideForm = new EventEmitter();

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {
   
   }

  ngOnInit(): void {
    this.user = new User();
    this.route.paramMap.subscribe(
      (params) => {
        if(!params.get('id')) {
          return;
        }
        //this.userService.getUser(+params.get('id')).subscribe(res => this.user = response['data']);
        this.user = this.userService.getUser(+params.get('id'));
      }
    )
  }

  saveUser() {
    //checkUser(this.user);
    if(this.user.id > 0) {
      //this.userService.updateUser.subscribe(res => { 
      //  const user = res['data'] as User;
      // if(res['success']) {
      //  alert('User ' + User.name + ' modificato correttamente' ); 
      // } else {
      //  alert(response['message']); 
      // }
      // this.router.navigate(['users']);
      //});
      this.userService.updateUser(this.user);
    } else if(this.user.id === 0) {
      //this.userService.createUser.subscribe(res => { 
      //  const user = res['data'] as User;
      // if(res['success']) {
      //  alert('User ' + User.name + ' creato correttamente' ); 
      // } else {
      //  alert(response['message']); 
      // }
      // this.router.navigate(['users']);
      //});

      this.userService.createUser(this.user);
    }
    //Da rimuovere se uso l'observer
    this.router.navigate(['users']);
  }

  resetForm(form) {
    if(this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }

}
