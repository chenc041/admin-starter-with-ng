import { Injectable } from '@angular/core';
import { USER_TOKEN } from '~/app/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  setAuthToken(token: string) {
    localStorage.setItem(USER_TOKEN, token);
  }

  getAuthToken() {
    return `Bearer ${localStorage.getItem(USER_TOKEN)}`;
  }
}
