import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import { ListOfUsersService } from '../list-of-users/list-of-users.service';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent{
  currentUser: IUser;
  
  constructor(
    private listOfUserService: ListOfUsersService
    ) {}

  ngDoCheck() {
    this.currentUser = this.listOfUserService.getCurrentUser();
  }
}