import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../shared/config';
// import { IListOfUsers } from '../../../shared/interfaces/token';


@Injectable()
export class ListOfUsersService {
  constructor(
    private http: HttpClient
    ) {}

  getUsers(page): Observable<any> {
    return this.http.get<any>(`${API_URL}/users?page=${page}`);
  }
}