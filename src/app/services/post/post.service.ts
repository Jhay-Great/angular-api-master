import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// local modules imports
import { IPost } from '../../interface/post.interface';
// interceptor
import { authInterceptor } from '../interceptors/auth.interceptor';

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
    // TODO:handle errors before data is sent to the component
    return this.httpClient.get<IPost[]>(`${this.api}${type}`)
  }

  // post data to the server
  postData (type:{}) {
    return
  }
  
}
