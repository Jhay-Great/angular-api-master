import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayAllPostsComponent } from './components/display-all-posts/display-all-posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayAllPostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-api-master';
}
