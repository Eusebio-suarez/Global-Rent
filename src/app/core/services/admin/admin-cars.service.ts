import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse } from '../../models/response/apiResponse';
import { AdminCarDTO } from '../../models/response/car';

@Injectable({
  providedIn: 'root'
})
export class AdminCarsService {

  readonly http = inject(HttpClient)

  readonly API_BASE_URL = "http://localhost:8080/api/v1/admin/cars"

  getAllCars(){
    return this.http.get<ApiResponse<AdminCarDTO[]>>(this.API_BASE_URL)
  }

  create(data:FormData){
    return this.http.post<ApiResponse<AdminCarDTO>>(this.API_BASE_URL,data)
  }

  update(licensePlate:string,formData:FormData){

    return this.http.patch<ApiResponse<AdminCarDTO>>(this.API_BASE_URL+`/${licensePlate}`,formData)
  }

  changeStatus(licensePlate: string,data:FormData){

    return this.http.patch<ApiResponse<AdminCarDTO>>(this.API_BASE_URL+`/${licensePlate}`,data)

  }

  delete(licensePlate:string){
    return this.http.delete<ApiResponse<void>>(this.API_BASE_URL+`/${licensePlate}`)
  }

}
