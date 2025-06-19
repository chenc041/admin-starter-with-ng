import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '~/app/services/auth.service';
import { environment } from '~/environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
	const authToken = inject(AuthService).getAuthToken();
	const headers = authToken
		? req.headers.append('Authorization', `Bearer ${authToken}`)
		: req.headers;
	const newReq = req.clone({
		url: `${environment.baseUrl}${req.url}`,
		headers: headers,
	});
	return next(newReq);
};
