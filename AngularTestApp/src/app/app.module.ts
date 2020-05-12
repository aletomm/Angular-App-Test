import { UserService } from './services/user.service';
import { UsersComponent } from './users/users.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { UcfirstPipe } from './pipes/ucfirst.pipe';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { NavComponent } from './nav/nav/nav.component';
import { UserDataComponent } from './user-data/user-data.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

registerLocaleData(localeIt);

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    UcfirstPipe,
    NavComponent,
    UserDataComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
