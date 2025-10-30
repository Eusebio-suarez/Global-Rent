import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem("Authorization")
  
  const cloneReq = token ? req.clone({
    setHeaders:{
      Authorization : token
    }
  }):req

  return next(cloneReq);
};
