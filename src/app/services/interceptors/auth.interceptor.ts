import { HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // generate a random token for now
  const result = generateAuthToken();
  const authReq = req.clone({setHeaders: { Authorization: result}})

  return next(authReq);
  
  // return next(req);
};


const generateRandom = () => Math.random() * 50;

const generateAuthToken = function () {
  return `${generateRandom()}${generateRandom()}${generateRandom()}`; 
}

// logger interceptor
export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`Outgoing request to ${req.url}`);
  return next(req).pipe(
    tap(event => {
      console.log(event.type);
      if (event instanceof HttpResponse) {
        console.log(`incoming response from ${req.url}`)
      }
    })
  )
}

