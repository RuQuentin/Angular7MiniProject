// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatTableModule} from '@angular/material/table';

import { ListOfUsersService } from './list-of-users/list-of-users.service'

import { HomeComponent } from './home.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListOfUsersComponent,
    UserInfoComponent
  ],
  imports: [
    MatTableModule
  ],
  providers: [
    ListOfUsersService
  ],
  exports: [
    HomeComponent,
    ListOfUsersComponent,
    UserInfoComponent
  ]
})
export class HomeModule {}