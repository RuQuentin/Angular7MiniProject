import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private router: Router
    ) {}


  onLogIn(email, password) {
    this.loginService.sendRequest(email, password)
      .subscribe(
          data => {
            this.loginService.setToken(data)
            this.router.navigate(['/home'])
          },
          error => {
            this.loginService.deleteToken()
          })
  }
}