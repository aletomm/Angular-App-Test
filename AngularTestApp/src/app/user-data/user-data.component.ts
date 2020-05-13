import { UserService } from './../services/user.service';
import { User } from './../classes/user';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  private _user: User;
  title: string = "Dettagli utente";

  set user(u:User) {
    this._user = u;
  }

  get user(): User {
    return this._user;
  }

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();

    this.route.paramMap.subscribe((params) => {
      if(!params.get('id')) {
        return;
      }
      //this.userService.getUser(+params.get('id')).subscribe(res => this.user = response['data']);
      this.user = this.userService.getUser(+params.get('id'));
    });
  }

}
