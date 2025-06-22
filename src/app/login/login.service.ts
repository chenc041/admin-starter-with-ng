import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import type { Result } from '~/app/interfaces/api.interface';
import type { LoginDto } from '~/app/login/login.interface';

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	private http = inject(HttpClient);

	/**
	 * for submit login info
	 */
	login(payload: LoginDto): Observable<Result<string>> {
		return this.http.post<Result<string>>('/api/v1/user/login', payload);
	}
}
