import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

// local modules imports
import { IPost } from '../../interface/post.interface';
// interceptor
import { authInterceptor, loggerInterceptor } from '../interceptors/auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  api:string = 'https://jsonplaceholder.typicode.com/';

  constructor(
    private httpClient: HttpClient,
  ) { }

  // gets or fetches data from the server
  fetchData (type:string):Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${this.api}${type}`).pipe(
      // error handling
      catchError((error) => {
        console.log('logs error: ', error);
        return of([]); // fallback
      })
    )
  }

  // post data to the server
  postData (type:{}) {
    return
  }
  
}
