import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayAllPostsComponent } from './components/display-all-posts/display-all-posts.component';
import { Store } from '@ngrx/store';
import { AppState } from './interface/post.interface';
import { onLoadPost } from './state/actions/post.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayAllPostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-api-master';

  constructor (
    private store:Store<AppState>,
  ) {};

  ngOnInit(): void {
    this.store.dispatch(onLoadPost());
  }
}
