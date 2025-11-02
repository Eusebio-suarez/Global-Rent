import { Component, Inject, inject, OnInit } from '@angular/core';
import { Car } from '../../../../core/models/response/car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../../../../core/services/cars.service';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reserve',
  imports: [CurrencyPipe, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './reserve.component.html'
})
export class ReserveComponent implements OnInit {
  
  carsService:CarsService = inject(CarsService)

  activatedRouter:ActivatedRoute = inject(ActivatedRoute)

  fb:FormBuilder = inject(FormBuilder)
  
  reserveForm! :FormGroup
  
  selectedCar:Car | undefined

  date = new Date()

  today!:string

  ngOnInit(){

    this.getCar()

    this.reserveForm = this.fb.group({
      licensePlate:[this.selectedCar?.licensePlate],
      startDate:["",[Validators.required]],
      endDate:["",[Validators.required]]
    })

    const year = this.date.getFullYear()
    const month = (this.date.getMonth()+1).toString().padStart(2,"0")
    const day = this.date.getDate().toString().padStart(2,"0")

    this.today = `${year}-${month}-${day}`
    
    console.log(this.today)
  }

  getCar(){
    const model = this.activatedRouter.snapshot.params["model"]

    this.carsService.getCar(model).subscribe(car =>{
      this.selectedCar = car
    })
  }
  
}
