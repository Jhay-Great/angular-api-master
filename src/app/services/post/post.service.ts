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

  fetch (type:string) {
    return 
  }
  
}
