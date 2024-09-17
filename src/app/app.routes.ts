import { Routes } from '@angular/router';
import { DisplayAllPostsComponent } from './components/display-all-posts/display-all-posts.component';
// import { DisplayAPostComponent } from './components/display-a-post/display-a-post.component';
// import { CreateAPostComponent } from './components/create-a-post/create-a-post.component';

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
  {
    path: 'create',
    loadComponent: () => import(
     './components/create-a-post/create-a-post.component'
    ).then(c => c.CreateAPostComponent)
  }
];


