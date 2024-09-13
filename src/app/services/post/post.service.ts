import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  api:string = 'https://jsonplaceholder.typicode.com/';

  constructor(
    private httpClient: HttpClient,
  ) { }

  // gets or fetches data from the server
  fetchData (type:string) {
    return this.httpClient.get(`${this.api}${type}`)
  }

  // post data to the server
  postData (type:{}) {
    return
  }
  
}
