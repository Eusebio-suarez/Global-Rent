import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from '../../../../core/models/response/car';
import { CarsService } from '../../../../core/services/cars/cars.service';
import { ReservationsService } from '../../../../core/services/reserves/reservations.service';
import { CurrencyPipe } from '@angular/common';
import { ReserveDetailsService } from '../../../../core/services/reserves/reserve-details.service';
import { ConfirmReserveComponent } from "../confirm-reserve/confirm-reserve.component";
import { MapComponent } from "../map/map.component";
@Component({
  selector: 'app-reserve',
  imports: [CurrencyPipe, ConfirmReserveComponent, MapComponent],
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

  //modal
  isOpenModal = false

  ngOnInit(){

    this.getCar()

    console.log(this.reserveDetailsService.reserveDetails())
    
  }

  getCar(){
    const model = this.activatedRouter.snapshot.params["model"]

    this.carsService.getCar(model).subscribe(car =>{

      this.selectedCar = car

      this.calculateTotal()

      //actualizar
      this.reserveDetailsService.reserveDetails.update(r => ({
      ...r,
      licensePlate: this.selectedCar?.licensePlate ?? ""
      }));

    })


  }

  tryReserve(){
    this.closeModal()

    const details = this.reserveDetailsService.reserveDetails()

    if(details === null){
      return
    }

    this.reservationsService.reserve(details).subscribe({

      next:(res)=>{
        this.toastr.success(res.message, "Exito")

        this.router.navigate(["history"])
      },

      error:(err)=>{
        this.toastr.error(err.message, "Error")
      }

    })

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

  openModal(){
    this.isOpenModal = true
  }

  closeModal(){
    this.isOpenModal = false
  }

}
