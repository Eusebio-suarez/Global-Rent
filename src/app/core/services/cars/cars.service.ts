import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../../models/response/apiResponse';
import { Car } from '../../models/response/car';
import { CarsAvaliablesRequest } from '../../models/request/carsRequest';
@Injectable({
  providedIn: 'root'
})
export class CarsService {

  http:HttpClient = inject(HttpClient)

  readonly API_BASE_URL = "http://localhost:8080/api/v1"

  getCars():Observable<ApiResponse<Car[]>>{

    return this.http.get<ApiResponse<Car[]>>(this.API_BASE_URL+"/cars").pipe(

      map((res)=>(
        {
          ...res,
          data:res.data.sort((a,b) => a.price - b.price)
        }
      ))
    )
  }

  getCar(model:string):Observable<Car | undefined>{

    return this.getCars().pipe(
      map(res => res.data.find((car) => car.model == model))
    )

  }

  getAvaliablesCars(request:CarsAvaliablesRequest):Observable<ApiResponse<Car[]>>{

    return this.http.get<ApiResponse<Car[]>>(this.API_BASE_URL+"/cars/avaliables?", {params:{startDate:request.startDate,endDate:request.endDate}}).pipe(
      map((res)=>({
        ...res,
        data:res.data.sort((a,b)=> a.price - b.price)
      }))
    )
  }
  
}
