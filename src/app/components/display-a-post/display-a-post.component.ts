import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, IComments, IPost, IPostComment } from '../../interface/post.interface';
import { map, Observable, Subscription } from 'rxjs';
import { selectSinglePost } from '../../state/selectors/post.selector';
import { AsyncPipe } from '@angular/common';
import { getSinglePost } from '../../state/actions/post.action';

@Component({
  selector: 'app-display-a-post',
  standalone: true,
  imports: [ AsyncPipe ],
  templateUrl: './display-a-post.component.html',
  styleUrl: './display-a-post.component.scss'
})
export class DisplayAPostComponent implements OnInit, OnDestroy {


  // data!:Observable<IPost[]>;
  // post!:Observable<IPost[]>;
  // data!:Observable<IPostComment>;
  data = this.store.select(selectSinglePost);
  subscription!: Subscription;
  post!:IPost[];
  comments!:IComments[];

  constructor (
    private store: Store<AppState>,
  ) {};

  ngOnInit(): void {
    this.store.dispatch(getSinglePost({id: 2}))
    

    this.subscription = this.store.select(selectSinglePost).subscribe(
      value => {
        const { post, postComments } = value;
        this.post = post;
        this.comments = postComments;

      }
    )
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
