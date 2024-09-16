import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

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
