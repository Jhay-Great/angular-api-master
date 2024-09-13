import { HttpInterceptorFn } from '@angular/common/http';

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

