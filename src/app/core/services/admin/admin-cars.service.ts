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
}
