import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/response/apiResponse';
import { Car } from '../models/response/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  http:HttpClient = inject(HttpClient)

  readonly API_BASE_URL = "http://localhost:8080/api/v1"

  getCars():Observable<ApiResponse<Car[]>>{

    return this.http.get<ApiResponse<Car[]>>(this.API_BASE_URL+"/cars")
  }
}
