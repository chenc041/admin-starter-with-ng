import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, PasswordModule, InputTextModule, ButtonModule, CheckboxModule],
  templateUrl: './login.component.html',
})
export default class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl<string | null>(null, [Validators.required]),
  });

  handleLogin(): void {
    const { valid, value } = this.loginForm;
    console.log(value, valid, 'onLogin');
  }
}
