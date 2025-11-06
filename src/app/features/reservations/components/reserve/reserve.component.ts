import { Component, inject, OnInit} from '@angular/core';
import { Car } from '../../../../core/models/response/car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../../../../core/services/cars.service';
import { CurrencyPipe } from '@angular/common';
import { NgClass } from '@angular/common';
import { FormBuilder, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ReservationsService } from '../../../../core/services/reservations.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reserve',
  imports: [CurrencyPipe, ɵInternalFormsSharedModule, ReactiveFormsModule,NgClass],
  templateUrl: './reserve.component.html'
})
export class ReserveComponent implements OnInit {
  
  carsService:CarsService = inject(CarsService)

  reservationsService:ReservationsService = inject(ReservationsService)

  toastr:ToastrService = inject(ToastrService)

  activatedRouter:ActivatedRoute = inject(ActivatedRoute)

  fb:FormBuilder = inject(FormBuilder)
  
  reserveForm! :FormGroup
  
  selectedCar:Car | undefined

  minStartDate!:Date

  maxStartDate!:Date

  minStartTextDate!:string

  maxStartTextDate!:string

  minEndDate!:Date

  maxEndDate!:Date

  minEndTextDate!:string

  maxEndTextDate!:string

  totalPrice:number = 0

  totalDays:number = 0

  ngOnInit(){

    this.getCar()

    this.reserveForm = this.fb.group({
      licensePlate:[""],
      startDate:["",[Validators.required]],
      endDate:["",[Validators.required]],
    })

    //deshabilitar la fecha de fin por defecto
    this.reserveForm.get("endDate")?.disable()

    // escuchar los cambios del input de la fecha de inicio
    this.reserveForm.get("startDate")?.valueChanges.subscribe((value)=>{

      this.reserveForm.get("endDate")?.reset()
    
      if(value){
        this.reserveForm.get("endDate")?.enable()
      }
      else{
        this.reserveForm.get('endDate')?.disable();
      }
    })

    //escuchar los cambios del input de la fecha de fin
    this.reserveForm.get("endDate")?.valueChanges.subscribe((value)=>{

      if(value){
        this.calculateTotalPrice()
      }else{
        this.totalDays = 0
        this.totalPrice = 0
      }

    })

    this.calculateMinStartTextDate()
    this.calculateMaxStartTextDate()
    
  }

  tryReserve(){

    this.reservationsService.reserve(this.reserveForm.value).subscribe({
      next:(response)=>{
        this.toastr.success(response.message,"Exito")
        console.log(response)
      },
      error:(e:Error)=>{
        this.toastr.error(e.message,"Error")
      }
    })

  }

  getCar(){
    const model = this.activatedRouter.snapshot.params["model"]

    this.carsService.getCar(model).subscribe(car =>{

      this.selectedCar = car

      this.reserveForm.patchValue({
        licensePlate:car?.licensePlate
      })
    })
  }

  calculateMinStartTextDate(){

    this.minStartDate = new Date()

    this.minStartDate.setDate(this.minStartDate.getDate() + 1)

    const year = this.minStartDate.getFullYear()
    const month = (this.minStartDate.getMonth()+1).toString().padStart(2,"0")
    const day = this.minStartDate.getDate().toString().padStart(2,"0")

    this.minStartTextDate = `${year}-${month}-${day}`

  }
  
  calculateMaxStartTextDate(){

    this.maxStartDate = new Date()

    this.maxStartDate.setDate(this.maxStartDate.getDate() + 1)

    this.maxStartDate.setMonth(this.maxStartDate.getMonth()+1)

    const year = this.maxStartDate.getFullYear()

    const month = (this.maxStartDate.getMonth()+1).toString().padStart(2,"0")

    const day = this.maxStartDate.getDate().toString().padStart(2,"0")

    this.maxStartTextDate = `${year}-${month}-${day}`
  }

  calculateEndDate(){

    this.calculateMinEndTextDate()

    this.calculateMaxEndTextDate()
  }

  calculateMinEndTextDate(){

    this.minEndDate = new Date(this.reserveForm.get("startDate")?.value)

    /*se nesecita esta fecha exacta pero el navegador
    resta la el desplazamiento de la hora local por lo que
    puede modificar el dia de la fecha*/
    
    //Corregir el desplazamiento por zona horaria
    this.minEndDate.setMinutes(this.minEndDate.getMinutes()+ this.minEndDate.getTimezoneOffset())

    this.minEndDate.setDate(this.minEndDate.getDate() + 1)

    const year = this.minEndDate.getFullYear()
    const month = (this.minEndDate.getMonth()+1).toString().padStart(2,"0")
    const day = this.minEndDate.getDate().toString().padStart(2,"0")

    this.minEndTextDate = `${year}-${month}-${day}`

  }

  calculateMaxEndTextDate(){
    
    this.maxEndDate = this.minEndDate

    this.maxEndDate.setDate(this.maxEndDate.getDate() - 1)

    this.maxEndDate.setMonth(this.maxEndDate.getMonth() + 1)

    const year = this.maxEndDate.getFullYear()

    const month = (this.maxEndDate.getMonth()+1).toString().padStart(2,"0")

    const day = this.maxEndDate.getDate().toString().padStart(2,"0")

    this.maxEndTextDate = `${year}-${month}-${day}`

  }

  calculateTotalPrice(){

    const startDate = new Date(this.reserveForm.get("startDate")?.value)

    const endDate = new Date(this.reserveForm.get("endDate")?.value)

    //Corregir el desplazamiento por zona horaria
    startDate.setMinutes(startDate.getMinutes() + startDate.getTimezoneOffset())
    endDate.setMinutes(endDate.getMinutes() + endDate.getTimezoneOffset())


    //get time devulve el tiempo en milisegundos
    this.totalDays = (endDate.getTime() - startDate.getTime())/86400000 //un dia en milisegundos

    this.totalPrice = this.totalDays * (this.selectedCar?.price? this.selectedCar.price : 0)
  }
}
