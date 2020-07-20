import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login/login-page.component';
import { RegisterPageComponent } from './register/register-page.component';
import { ErrorPageComponent } from './error/error-page.component';
import { NoAuthGuard } from 'app/shared/auth/no-auth.guard';
import { LockScreenPageComponent } from './lock-screen/lock-screen-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [NoAuthGuard]
  },
    {
    path: 'register',
    component: RegisterPageComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'register/:id',
    component: RegisterPageComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
