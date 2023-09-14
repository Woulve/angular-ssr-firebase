import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./text/text.component').then((m) => m.TextComponent),
  },
];
