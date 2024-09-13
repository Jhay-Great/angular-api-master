import { Component } from '@angular/core';

// local modules
import { PostService } from '../../services/post/post.service';
import { IPost } from '../../interface/post.interface';

@Component({
  selector: 'app-display-all-posts',
  standalone: true,
  imports: [],
  templateUrl: './display-all-posts.component.html',
  styleUrl: './display-all-posts.component.scss'
})
export class DisplayAllPostsComponent {

  data!:IPost[];

  constructor (
    private postService: PostService,
  ) {

    console.log('this is running');

    this.postService.fetchData('posts').subscribe(
      value => console.log(value),
    )

  }

}
