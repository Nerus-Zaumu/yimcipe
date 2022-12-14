import { EmailVerifierComponent } from './email-verifier/email-verifier.component';
import { PasswordChangeVerificationComponent } from './password-change-verification/password-change-verification.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/verify', pathMatch: 'full'},
  {path: '', component: UserComponent, children: [
    {path: 'verify', component: EmailVerifierComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'forgot', component: ForgotPasswordComponent},
    {path: 'reset/:resetId', component: ResetPasswordComponent},
    {path: 'forgot/sent/:id', component: PasswordChangeVerificationComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
