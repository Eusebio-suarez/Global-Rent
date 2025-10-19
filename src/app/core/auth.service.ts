import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ApiResponse } from './models/response/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly API_BASE_URL="http://localhost:8080/api/v1/auth"

  private http:HttpClient = Inject(HttpClient)

  login(credentials:{email:string,password:string}):Observable<ApiResponse<string>>{

    return this.http.post<ApiResponse<string>>(this.API_BASE_URL+"/login",credentials).pipe(
      tap(res =>{
        console.log("login exitoso")
        localStorage.setItem("Authorization","Bearer "+res.data)
      }),
    
      catchError(error => {
        const message = error.error?.message||"Error al iniciar Sesión."

        return throwError(() => new Error(message))

        
      })
    )
  }
}
