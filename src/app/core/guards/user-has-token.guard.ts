import { Injectable }    from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class UserHasTokenGuard implements CanActivate {

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {};

  canActivate(): boolean {
    if (this.localStorage.retrieve('token')) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}