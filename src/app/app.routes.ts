import { Routes } from '@angular/router';
import { DisplayAPostComponent } from './components/display-a-post/display-a-post.component';
import { DisplayAllPostsComponent } from './components/display-all-posts/display-all-posts.component';

export const routes: Routes = [
  {
    path: '',
    component: DisplayAllPostsComponent,
  },
  {
    path: 'post/:id',
    loadComponent: () => import(
        './components/display-a-post/display-a-post.component'
    ).then((c) => c.DisplayAPostComponent),
    
  },
];

// {
//     path: 'lazy',
//     loadComponent: () => import('./lazy-component').then(m => m.LazyComponent)
//   }
