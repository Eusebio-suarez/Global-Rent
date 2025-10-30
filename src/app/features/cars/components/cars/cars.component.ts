import { Component, inject, OnInit } from '@angular/core';
import { CarsService } from '../../../../core/services/cars.service';
import { Car } from '../../../../core/models/response/car';
import { CarCardComponent } from "../car-card/car-card.component";

@Component({
  selector: 'app-cars',
  imports: [CarCardComponent],
  templateUrl: './cars.component.html'
})
export class CarsComponent implements OnInit{

  carsService:CarsService = inject(CarsService)

  cars:Car[] = []

  ngOnInit(){
    this.getCars()
  }

  getCars(){

    this.carsService.getCars().subscribe({
      next:(res)=>{
        console.log(res.data)

        this.cars = res.data
      },
      error:()=>{
        alert("error")
      }
    })
  }

}
