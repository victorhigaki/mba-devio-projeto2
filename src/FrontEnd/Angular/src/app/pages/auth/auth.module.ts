import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BaseButtonComponent } from '../../components/base-button/base-button.component';
import { BaseInputComponent } from '../../components/base-input/base-input.component';
import { authRoutes } from './auth.routes';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth/auth.service';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule,
    
    BaseInputComponent,
    BaseButtonComponent,
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
