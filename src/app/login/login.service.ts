import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDto } from '~/app/login/login.interface';
import { Result } from '~/app/interfaces/menu';
import { Observable } from 'rxjs';

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
