import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method !== 'POST') {
    console.log(`request logging: ${req.url}`, req.params);
  } else {
    console.log(`request logging: ${req.url}`, req.body);
  }
  return next(req).pipe(
    tap((response) => {
      console.log(`response logging: ${response}`);
    }),
    catchError((err) => {
      return of(err);
    }),
  );
};
