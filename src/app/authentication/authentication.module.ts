import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AccountManagerComponent } from './account-manager/account-manager.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [ AccountManagerComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
