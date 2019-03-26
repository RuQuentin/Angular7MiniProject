import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../shared/config';
import { IUsersPage } from '../../../shared/interfaces/usersPage';
import { IUser } from 'src/app/shared/interfaces/user';


@Injectable()
export class ListOfUsersService {
  currentUser: IUser;

  constructor(
    private http: HttpClient
    ) {}

  getUsers(page): Observable<IUsersPage> {
    return this.http.get<IUsersPage>(`${API_URL}/users?page=${page}`);
  }

  setCurrentUser(user) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}