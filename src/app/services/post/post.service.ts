import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

// local modules imports
import { IPost } from '../../interface/post.interface';
import { ErrorService } from '../errors/error.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  api: string = 'https://jsonplaceholder.typicode.com/';

  // caching
  private posts: IPost[] = [];
  private storeSubject = new BehaviorSubject<IPost[]>(this.posts);
  private store$ = this.storeSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  // gets or fetches data from the server
  private fetchData(type: string): void {
    this.httpClient
      .get<IPost[]>(`${this.api}${type}`)
      .pipe(
        // transformation
        map((posts) => this.storeSubject.next(posts)),
        // retries
        this.errorService.retry(),
        // error handling
        catchError((error) => {
          console.log('logs error: ', error);
          return of([]); // fallback
        })
      )
      .subscribe();
  }

  getPosts() {
    this.fetchData('posts');
    return this.store$;
  }

  // post data to the server
  postData(type: {}) {
    return;
  }
}
