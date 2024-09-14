import { HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';




// helper functions
const generateRandom = () => Math.random() * 50;

const generateAuthToken = function () {
  return `${generateRandom()}${generateRandom()}${generateRandom()}`; 
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // generate a random token for now
  const token = generateAuthToken();
  const authReq = req.clone({setHeaders: { Authorization: token}})

  return next(authReq); // passes the request to the next interceptor
  
  // return next(req);
};


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

