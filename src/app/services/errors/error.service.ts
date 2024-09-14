import { Injectable } from '@angular/core';
import { catchError, Observable, pipe, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  // custom observable to handle retries
  // retry (count:number=3) {
  //   return pipe(
  //     retry(count),
  //     catchError(error => {
  //       return throwError(() => new Error(`An error occurred ${error}`));
  //     })
  //   )
  // }
  retry (count:number=3) {
    return (source:Observable<any>): Observable<any> => {
      return source.pipe(
        retry(count),
        catchError(error => {
          console.log(`retried 3 times`);
          return throwError(() => new Error(`An error occurred ${error}`));
        })
      )
    }
  }
}
