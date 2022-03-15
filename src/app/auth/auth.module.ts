import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';

const authUrl: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [SharedModule, RouterModule.forChild(authUrl)],
  exports: [RouterModule],
})
export class AuthModule {}
