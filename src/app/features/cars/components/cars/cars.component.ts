import { Component, inject, OnInit } from '@angular/core';
import { CarsService } from '../../../../core/services/cars/cars.service';
import { Car } from '../../../../core/models/response/car';
import { CarCardComponent } from "../car-card/car-card.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cars',
  imports: [CarCardComponent],
  templateUrl: './cars.component.html'
})
export class CarsComponent implements OnInit{

  carsService:CarsService = inject(CarsService)

  toastr:ToastrService = inject(ToastrService)

  cars:Car[] = []

  isLoading:boolean = false

  ngOnInit(){
    this.getCars()
  }

  getCars(){
    this.isLoading = true

    this.carsService.getCars().subscribe({
      next:(res)=>{
        console.log(res.data)
          this.isLoading = false

        this.cars = res.data
      },
      error:()=>{

        this.toastr.error("Error en el servidor.","Error")
      }
    })

  }

}
