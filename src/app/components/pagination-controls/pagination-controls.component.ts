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
  selector: 'app-pagination-controls',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pagination-controls.component.html',
  styleUrl: './pagination-controls.component.scss'
})
export class PaginationControlsComponent implements OnInit {

  data!:Observable<IPost[]>;
  currentPage!:Observable<number>;
  totalPages!:Observable<number>;
  
  constructor (
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


