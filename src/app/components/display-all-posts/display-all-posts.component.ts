import { Component, OnInit } from '@angular/core';

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
export class DisplayAllPostsComponent implements OnInit {

  data!:IPost[];

  constructor (
    private postService: PostService,
  ) { }
  
  ngOnInit(): void {
    console.log('this is running');
  
    this.postService.getPosts().subscribe(
      value => console.log(value),
    )
    
  }

}
