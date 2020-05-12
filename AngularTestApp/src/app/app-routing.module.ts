import { SignupComponent } from './signup/signup.component';
import { ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login/login.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from './services/route-guard.service';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users',
    pathMatch: 'full',
    component: UsersComponent,
    canActivate: [RouteGuardService] 
  },
  {
    path: 'users/new',
    component: UserDetailComponent
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent
  },
  {
    path: 'users/:id',
    component: UserDataComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }

];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    RouteGuardService
  ]
})
export class AppRoutingModule { }
