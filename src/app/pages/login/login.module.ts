import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    MatFormFieldModule
  ],
  providers: [],
  exports: [
    LoginComponent
  ]
})

export class LoginModule {};