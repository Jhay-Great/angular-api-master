import { Component } from '@angular/core';

// local modules
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-display-all-posts',
  standalone: true,
  imports: [],
  templateUrl: './display-all-posts.component.html',
  styleUrl: './display-all-posts.component.scss'
})
export class DisplayAllPostsComponent {

  constructor (
    private postService: PostService,
  ) {

    postService.fetchData('post');

  }

}
