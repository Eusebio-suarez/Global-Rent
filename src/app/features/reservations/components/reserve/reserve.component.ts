import { Component, Inject, inject, OnInit } from '@angular/core';
import { Car } from '../../../../core/models/response/car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../../../../core/services/cars.service';

@Component({
  selector: 'app-reserve',
  imports: [],
  templateUrl: './reserve.component.html'
})
export class ReserveComponent implements OnInit {
  
  carsService:CarsService = inject(CarsService)

  activatedRouter:ActivatedRoute = inject(ActivatedRoute)

  selectedCar:Car | undefined

  ngOnInit(){

    const model = this.activatedRouter.snapshot.params["model"]

    console.log(model)

    this.carsService.getCar(model).subscribe(car =>{
      this.selectedCar = car
    })

  }
  
}
