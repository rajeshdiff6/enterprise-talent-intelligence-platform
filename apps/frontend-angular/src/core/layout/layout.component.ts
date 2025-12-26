import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/candidates">Candidates</a>
    </nav>
    <main>
      <router-outlet />
    </main>
  `,
  styles: [`nav { padding: 12px; background: #eee }`]
})
export class LayoutComponent {}
