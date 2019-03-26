import { Component } from '@angular/core';
import { ListOfUsersService } from './list-of-users.service'
import { OnInit } from '@angular/core'

@Component({
  selector: 'list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {
  listOfUsers: any[] = [];
  pageCounter: number = 1;

  constructor(
    private listOfUsersService: ListOfUsersService
  ) {}

  ngOnInit() {
    this.getListOfUsers();
  }

  getListOfUsers() {
    this.listOfUsersService.getUsers(this.pageCounter)
      .subscribe(
        data => {
          this.listOfUsers = this.listOfUsers.concat(data.data);
          if (data.data.length === 0) return;

          this.pageCounter++;
          return this.getListOfUsers();
        },
        error => {
          console.log(error)
        }
      )
  };

}