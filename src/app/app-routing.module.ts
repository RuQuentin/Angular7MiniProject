import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserInfoComponent } from './pages/home/user-info/user-info.component';
import { UserHasTokenGuard } from './core/guards/user-has-token.guard'

const routes: Routes = [{
    path: 'login',
    component: LoginComponent
  }, {
    path: 'home',
    component: HomeComponent,
    canActivate: [UserHasTokenGuard],
    children: [{
      path: ':id',
      component: UserInfoComponent,
    }]
  }, {
    pathMatch: 'prefix',
    path: '',
    redirectTo: 'login',
  }, {
    path: '**',
    redirectTo: 'home',
    // component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
