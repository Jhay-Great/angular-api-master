import { Component, OnInit } from '@angular/core';

// local modules
import { PostService } from '../../services/post/post.service';
import { AppState, IPost } from '../../interface/post.interface';
import { Store } from '@ngrx/store';
import { selectAllPost, selectCurrentPage, selectTotalPages } from '../../state/selectors/post.selector';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { nextPage, previousPage } from '../../state/actions/post.action';

@Component({
  selector: 'app-display-all-posts',
  standalone: true,
  imports: [ AsyncPipe ],
  templateUrl: './display-all-posts.component.html',
  styleUrl: './display-all-posts.component.scss'
})
export class DisplayAllPostsComponent implements OnInit {

  data!:Observable<IPost[]>;
  currentPage!:Observable<number>;
  totalPages!:Observable<number>;

  constructor (
    private postService: PostService,
    private store: Store<AppState>
  ) { }
  
  ngOnInit(): void {

    this.data = this.store.select(selectAllPost);
    this.currentPage = this.store.select(selectCurrentPage);
    this.totalPages = this.store.select(selectTotalPages);

    
    
  }

  next () {
    this.store.dispatch(nextPage());
  }

  previous () {
    this.store.dispatch(previousPage());
  }

}
