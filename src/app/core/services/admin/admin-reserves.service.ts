import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../../models/response/apiResponse';
import { AdminReserveResponse } from '../../models/response/reserveResponse';

@Injectable({
  providedIn: 'root'
})
export class AdminReservesService {

  readonly http = inject(HttpClient)

  readonly API_BASE_URL="https://global-rent-back.onrender.com/api/v1/admin/"

  getAllReserves():Observable<ApiResponse<AdminReserveResponse[]>>{
    return this.http.get<ApiResponse<AdminReserveResponse[]>>(this.API_BASE_URL+"reservations").pipe(
      map((res)=>(
        {
          ...res,
          data:res.data.reverse()
        }
      ))
    )
  }

  getById(id:number):Observable<ApiResponse<AdminReserveResponse>>{
    return this.http.get<ApiResponse<AdminReserveResponse>>(this.API_BASE_URL+"reservations/"+id)
  }
}
