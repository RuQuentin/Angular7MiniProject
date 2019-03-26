import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserInfoComponent } from './pages/home/user-info/user-info.component';

const routes: Routes = [{
    path: 'login',
    component: LoginComponent
  }, {
    path: 'home',
    component: HomeComponent,
    children: [{
      path: ':id',
      component: UserInfoComponent,
    }]
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
