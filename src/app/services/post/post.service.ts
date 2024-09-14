import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

// local modules imports
import { IPost } from '../../interface/post.interface';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private api:string = `${environment.apiUrl}posts`;

  // caching
  private posts:IPost[] = [];
  private storeSubject = new BehaviorSubject<IPost[]>(this.posts);
  private store$ = this.storeSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
  ) { }

  // gets or fetches data from the server
  private fetchData ():void {
    this.httpClient.get<IPost[]>(`${this.api}`).pipe(
      // transformation
      map(posts => this.storeSubject.next(posts)),
      // error handling
      catchError((error) => {
        console.log('logs error: ', error);
        return of([]); // fallback
      })
    ).subscribe();
  }

  getPosts () {
    this.fetchData();
    return this.store$;
  }

  // post data to the server
  post (type:{}) {
    return
  }

  put () {

  };

  delete () {

  };
  
}
