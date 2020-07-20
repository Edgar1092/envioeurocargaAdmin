import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login/login-page.component';
import { ErrorPageComponent } from './error/error-page.component';
import { ComingSoonPageComponent } from './coming-soon/coming-soon-page.component';
import { ForgotPasswordPageComponent } from './forgot-password/forgot-password-page.component';
import { MaintenancePageComponent } from './maintenance/maintenance-page.component';
import { RegisterPageComponent } from './register/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LockScreenPageComponent } from './lock-screen/lock-screen-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    ErrorPageComponent,
    ComingSoonPageComponent,
    ForgotPasswordPageComponent,
    MaintenancePageComponent,
    RegisterPageComponent,
    LockScreenPageComponent
  ],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],
  providers: []
})
export class AuthModule {}
