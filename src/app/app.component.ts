import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { DisplayAllPostsComponent } from './components/display-all-posts/display-all-posts.component';
import { AppState } from './interface/post.interface';
import { onLoadComments, onLoadPost } from './state/actions/post.action';
import { DisplayAPostComponent } from './components/display-a-post/display-a-post.component';
import { CreateAPostComponent } from './components/create-a-post/create-a-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DisplayAllPostsComponent,
    DisplayAPostComponent,
    CreateAPostComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-api-master';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(onLoadPost());
    this.store.dispatch(onLoadComments());
    // fetching comments
    // this.store.dispatch(onLoadComments());
  }
}
