import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  standalone: true,
  template: `
    <h2>Login</h2>
    <button (click)="login()">Login</button>
  `
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    this.auth.login('fake-jwt-token');
    this.router.navigate(['/']);
  }
}
