import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userEmail: string = '';
  userPassword: string = '';

  constructor(private loginService: LoginService) {
    
  }

  onLogIn(email, password) {
    this.loginService.sendRequest(email, password)
      .subscribe(data => {
        console.log(data)
    });
  }
}