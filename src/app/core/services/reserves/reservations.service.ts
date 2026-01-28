import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiResponse } from '../../models/response/apiResponse';
import { ReserveCreatedResponse, ReserveResponse } from '../../models/response/reserveResponse'; 
import { ReserveDetails} from '../../models/request/reserveRequest';


@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  API_BASE_URL = "https://global-rent-back.onrender.com/api/v1"

  http:HttpClient = inject(HttpClient)


  reserve(request:ReserveDetails):Observable<ApiResponse<ReserveCreatedResponse>>{

    return this.http.post<ApiResponse<ReserveCreatedResponse>>(this.API_BASE_URL+"/reservations/reserve",request).pipe(
      catchError(error =>{

        console.log(error)

        const message = error.error?.message || "Errror al reservar"

        return throwError(()=> new Error(message))

      })
    )
  }

  getReservations():Observable<ApiResponse<ReserveResponse[]>>{

    return this.http.get<ApiResponse<ReserveResponse[]>>(this.API_BASE_URL+"/reservations").pipe(
      
      map((res) => ({
        ...res,
        data: res.data.reverse()
      })),

      catchError(error =>{

        const message = error.error?.message || "Error al obtener la reservas"

        return throwError(()=> new Error(message))
      })
    )
  }
}
