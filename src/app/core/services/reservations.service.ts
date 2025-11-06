import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiResponse } from '../models/response/apiResponse';
import { ReserveResponse } from '../models/response/reserveResponse';
import { ReserveRequest } from '../models/request/reserveRequest';


@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  API_BASE_URL = "http://localhost:8080/api/v1"

  http:HttpClient = inject(HttpClient)

  reserve(request:ReserveRequest):Observable<ApiResponse<ReserveResponse>>{

    return this.http.post<ApiResponse<ReserveResponse>>(this.API_BASE_URL+"/reservations/reserve",request).pipe(
      catchError(error =>{

        console.log(error)

        const message = error.error?.message || "Errror al reservar"

        return throwError(()=> new Error(message))

      })
    )
  }
}
