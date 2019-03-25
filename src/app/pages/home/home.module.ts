import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListOfUsersComponent,
    UserInfoComponent
  ],
  imports: [],
  exports: [
    HomeComponent,
    ListOfUsersComponent,
    UserInfoComponent
  ]
})
export class HomeModule {}