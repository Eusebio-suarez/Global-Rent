import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtService } from '../services/jwt/jwt.service';

export const roleGuard: CanActivateFn = (route, state) => {

  const jwt = inject(JwtService)

  const router = inject(Router)

  if(jwt.getRole() === route.data["expectedRole"]){
    return true
  }
  
  return router.parseUrl(router.url)
};
