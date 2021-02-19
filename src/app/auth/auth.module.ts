import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import {RegisterComponent} from './register/register.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
})
export class AuthModule {
}
