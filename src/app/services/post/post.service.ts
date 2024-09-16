import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';

// local modules imports
import { IPost, IPublish } from '../../interface/post.interface';
import { environment } from '../../../environments/environment';
import { ErrorService } from '../errors/error.service';
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
    private errorService: ErrorService,
  ) { }

  // gets or fetches data from the server
  private fetchData ():void {
    this.httpClient.get<IPost[]>(`${this.api}`).pipe(
      // transformation
      map(posts => this.storeSubject.next(posts)),
      this.errorService.retry(),
      // error handling
      catchError((error) => {
        console.log('logs error: ', error);
        return of({ data: [] }); // fallback
      })
    ).subscribe();
  }

  getPosts () {
    this.fetchData();
    return this.store$;
  }

  // post data to the server
  post (body:IPublish) {
    return this.httpClient.post<IPost[]>(this.api, body).pipe(
      tap(data => {
        this.storeSubject.next(data)
      }),
      map(data => ({ data })),
      this.errorService.retry(),
      catchError((error) => {
        return of({ data: [] });
      })
    )
  }

  put (id:string, body:string) {
    const url = `${this.api}/${id}`;
    return this.httpClient.put<IPost[]>(url, body).pipe(
      tap(data => {
        this.storeSubject.next(data)
      }),
      this.errorService.retry(),
      catchError((error) => {
        return of({ data: [] });
      })
    )
  };

  delete (id:string) {
    const url = `${this.api}/${id}`;
    return this.httpClient.delete<IPost[]>(url).pipe(
      tap(data => {
        this.storeSubject.next(data)
      }),
      this.errorService.retry(),
      catchError((error) => {
        return of({ data: [] });
      })
    )
  };
  
}
