import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenSignal = signal<string | null>(localStorage.getItem('token'));

  token() {
    return this.tokenSignal();
  }

  login(token: string) {
    localStorage.setItem('token', token);
    this.tokenSignal.set(token);
  }

  logout() {
    localStorage.removeItem('token');
    this.tokenSignal.set(null);
  }

  isAuthenticated(): boolean {
    return !!this.tokenSignal();
  }
}
