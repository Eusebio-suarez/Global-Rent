import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ApiResponse } from '../../models/response/apiResponse';
import { RegisterRequest } from '../../models/request/registerRequest';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly API_BASE_URL ="http://localhost:8080/api/v1"

  http:HttpClient = inject(HttpClient)


  tryRegister(request:RegisterRequest):Observable<ApiResponse<string>>{

    return this.http.post<ApiResponse<string>>(this.API_BASE_URL + "/auth/register", request).pipe(
      tap(()=>{
        console.log("exito")
      }),
      catchError(error => {
        const message = error.error?.message||"Error al registrarse."

        return throwError(() => new Error(message))
      })
    )

  }
}
