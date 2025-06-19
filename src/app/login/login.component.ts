import { Component, inject } from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { LoginService } from '~/app/login/login.service';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [
		ReactiveFormsModule,
		FormsModule,
		PasswordModule,
		InputTextModule,
		ButtonModule,
		CheckboxModule,
	],
	templateUrl: './login.component.html',
})
export default class LoginComponent {
	loginService = inject(LoginService);
	loginForm: FormGroup = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
		remember: new FormControl<boolean | null>(null),
	});

	handleLogin(): void {
		const { valid, value } = this.loginForm;
		console.log(valid, 'valid');
		if (valid) {
			this.loginService.login(value).subscribe((res) => console.log(res));
		} else {
			Object.values(this.loginForm.controls).forEach((control) => {
				if (control.invalid) {
					control.markAsDirty();
					control.updateValueAndValidity({ onlySelf: true });
				}
			});
		}
	}
}
