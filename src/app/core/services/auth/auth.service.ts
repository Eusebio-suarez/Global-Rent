import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ApiResponse } from '../../models/response/apiResponse';
import { LoginRequest } from '../../models/request/loginRequest';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly API_BASE_URL="https://global-rent-back.onrender.com/api/v1/auth"

  private http = inject(HttpClient)

  login(credentials:LoginRequest):Observable<ApiResponse<{token:string}>>{

    return this.http.post<ApiResponse<{token:string}>>(this.API_BASE_URL+"/login",credentials).pipe(
      tap(res =>{
        localStorage.setItem("Authorization",res.data.token)
      }),
    
      catchError(error => {
        const message = error.error?.message||"Error al iniciar Sesión."

        return throwError(() => new Error(message))
      })
    )
  }
}
