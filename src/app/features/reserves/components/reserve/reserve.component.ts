import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from '../../../../core/models/response/car';
import { CarsService } from '../../../../core/services/cars/cars.service';
import { ReservationsService } from '../../../../core/services/reserves/reservations.service';
import { CurrencyPipe } from '@angular/common';
import { NgClass } from '@angular/common';
import { ReserveDetailsService } from '../../../../core/services/reserves/reserve-details.service';
@Component({
  selector: 'app-reserve',
  imports: [CurrencyPipe],
  templateUrl: './reserve.component.html'
})
export class ReserveComponent {
  carsService:CarsService = inject(CarsService)

  reservationsService:ReservationsService = inject(ReservationsService)

  toastr:ToastrService = inject(ToastrService)

  activatedRouter:ActivatedRoute = inject(ActivatedRoute)

  reserveDetailsService:ReserveDetailsService = inject(ReserveDetailsService)
  
  router:Router = inject(Router)
  
  selectedCar:Car | undefined

  totalPrice:number = 0

  totalDays:number = 0

  ngOnInit(){

    this.getCar()

    console.log(this.reserveDetailsService.reserveDetails())
    
  }

  getCar(){
    const model = this.activatedRouter.snapshot.params["model"]

    this.carsService.getCar(model).subscribe(car =>{

      this.selectedCar = car

      this.calculateTotal()

    })


  }

  tryReserve(){

    /**
    this.reservationsService.reserve(this.reserveForm.value).subscribe({
      next:(response)=>{
        this.toastr.success(response.message,"Exito")
        this.router.navigate(["cars"])
        console.log(response)
      },
      error:(e:Error)=>{
        this.toastr.error(e.message,"Error")
      }
    })
    **/

  }
  
  calculateTotal(){

    const startDate = new Date(this.reserveDetailsService.reserveDetails()?.startDate || "")

    const endDate = new Date(this.reserveDetailsService.reserveDetails()?.endDate || "")

    //Corregir el desplazamiento por zona horaria
    startDate.setMinutes(startDate.getMinutes() + startDate.getTimezoneOffset())
    endDate.setMinutes(endDate.getMinutes() + endDate.getTimezoneOffset())


    //get time devulve el tiempo en milisegundos
    this.totalDays = (endDate.getTime() - startDate.getTime())/86400000 //un dia en milisegundos

    this.totalPrice = this.totalDays * (this.selectedCar?.price? this.selectedCar.price : 0)

  }

}
