import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { User } from './../../classes/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faUSerAstronaut = faUserAstronaut;

  @Output() onNewUser = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  newUser() {
   this.onNewUser.emit();
  }
}
