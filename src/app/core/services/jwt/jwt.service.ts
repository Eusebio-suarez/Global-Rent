import { inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class JwtService {

  jwt = inject(JwtHelperService)

  getToken():string{
    return localStorage.getItem("Authorization")??""
  }

  isTokenExpired():boolean{
    
    return this.jwt.isTokenExpired(this.getToken())
    
  }

  getRole():string{
    return this.jwt.decodeToken(this.getToken()).role??"ROLE_USER"
  }
}
