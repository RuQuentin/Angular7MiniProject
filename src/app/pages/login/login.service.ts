import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {

  }

  sendRequest(email, password): Observable<any> {
    return this.http.post('https://reqres.in/api/login', {
      "email": email,
      "password": password
  });  
  }
}