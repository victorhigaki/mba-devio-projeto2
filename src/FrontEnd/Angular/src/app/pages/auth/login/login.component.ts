import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: false,
})
export class LoginComponent implements OnInit {
  fb = inject(FormBuilder);
  private _authService = inject(AuthService);

  loginForm!: FormGroup;
  request = {};
  isDevelopment = environment.development;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['teste@teste.com'],
      password: ['Teste@123'],
    });

    this._authService.teste().subscribe({
      next: (res) => {
        console.log(res[0].id);
        this.loginForm.controls['email'].patchValue(res[0].id);
      },
    });
  }

  onSubmit() {
    this.request = this.loginForm.value;

    this._authService.login(this.request).subscribe({
      next: (res) => {
        
      },
    });
  }
}
