import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotusernameComponent } from './forgot-username.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../material-components/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
   
  ],
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ForgotusernameComponent 
  ],
  exports: [
    LoginComponent,
    ForgotPasswordComponent,
    ForgotusernameComponent
  ],
   providers: [ ],
})
export class LoginModule { }
