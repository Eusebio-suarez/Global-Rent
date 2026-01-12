import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtService } from '../services/jwt/jwt.service';

export const authenticationGuard: CanActivateFn = (route, state) => {

  const jwt = inject(JwtService)

  const router = inject(Router)

  if(!jwt.isTokenExpired()){
    return true
  }

  return router.parseUrl("/auth/login")

};
