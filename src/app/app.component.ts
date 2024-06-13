import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <div class="min-h-screen bg-slate-900 text-slate-200 flex flex-col">
      <nav class="flex items-center justify-between p-4 border-b border-slate-400">
        <div>
          <h1 class="font-semibold">{{ title }}</h1>
        </div>
        <div class="flex gap-3">
          <a routerLink="/">Home</a>
          <a routerLink="/about">About</a>
          <a routerLink="/counter">Counter</a>
          <a routerLink="/chrono">Chrono</a>
        </div>
      </nav>
      <div class="p-4 flex-1">
        <router-outlet />
      </div>
    </div>
  `,
  styles: [`
  `],
})
export class AppComponent {
  title = 'Angular';
}
