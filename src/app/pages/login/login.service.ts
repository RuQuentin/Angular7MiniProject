import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../shared/config';
import { IToken } from '../../shared/interfaces/token';
import { LocalStorageService } from 'ngx-webstorage';


@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
    ) {}

  sendRequest(email, password): Observable<IToken> {
    let body: Object = {};

    if (!this.localStorage.retrieve('token')) {
      body = { "email": email, "password": password }
    }

    return this.http.post<IToken>(`${API_URL}/login`, body);
  }

  setToken(data: IToken): void {
    this.localStorage.store('token', data)
  }

  deleteToken(): void {
    this.localStorage.clear('token')
  }
}