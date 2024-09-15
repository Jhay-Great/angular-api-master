import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, IPost } from '../../interface/post.interface';
import { Observable } from 'rxjs';
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
export class DisplayAPostComponent implements OnInit {

  data!:Observable<IPost[]>;

  constructor (
    private store: Store<AppState>,
  ) {};

  ngOnInit(): void {
    this.store.dispatch(getSinglePost({id: 2}))
    this.data = this.store.select(selectSinglePost);
  }

}
