import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';

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
      tap(data => {
        console.log(data);
      }),
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
  post (body:string) {
    return this.httpClient.post<IPost[]>(this.api, body).pipe(
      tap(data => {
        this.storeSubject.next(data)
      }),
      catchError((error) => {
        return of([]);
      })
    )
  }

  put (id:string, body:string) {
    const url = `${this.api}/${id}`;
    return this.httpClient.put<IPost[]>(url, body).pipe(
      tap(data => {
        this.storeSubject.next(data)
      }),
      catchError((error) => {
        return of([]);
      })
    )
  };

  delete (id:string) {
    const url = `${this.api}/${id}`;
    return this.httpClient.delete<IPost[]>(url).pipe(
      tap(data => {
        this.storeSubject.next(data)
      }),
      catchError((error) => {
        return of([]);
      })
    )
  };
  
}
