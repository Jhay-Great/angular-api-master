import { Routes } from '@angular/router';
import { DisplayAPostComponent } from './components/display-a-post/display-a-post.component';

export const routes: Routes = [
  {
    path: ':id',
    loadComponent: () => import(
        './components/display-a-post/display-a-post.component'
    ).then((c) => c.DisplayAPostComponent),
    // loadComponent() {
    //   return import(
    //     './components/display-a-post/display-a-post.component'
    //   ).then((c) => c.DisplayAPostComponent);
    // },
    // component: DisplayAPostComponent,
  },
];

// {
//     path: 'lazy',
//     loadComponent: () => import('./lazy-component').then(m => m.LazyComponent)
//   }
