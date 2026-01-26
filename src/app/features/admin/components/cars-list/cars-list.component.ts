import { Component, inject, OnInit } from '@angular/core';
import { AdminCarsService } from '../../../../core/services/admin/admin-cars.service';
import { AdminCarDTO } from '../../../../core/models/response/car';
import { ToastrService } from 'ngx-toastr';
import { CarAdminCardComponent } from '../car-admin-card/car-admin-card.component';
import { UpdateCarModalComponent } from "../update-car-modal/update-car-modal.component";
import { ChangeStatusModalComponent } from "../change-status-modal/change-status-modal.component";

@Component({
  selector: 'app-cars-list',
  imports: [CarAdminCardComponent, UpdateCarModalComponent, ChangeStatusModalComponent],
  templateUrl: './cars-list.component.html'
})
export class CarsListComponent implements OnInit {

  cars!:AdminCarDTO[]

  carsService = inject(AdminCarsService)

  toastr = inject(ToastrService)

  isLoading = false

  ngOnInit() {

    this.getCars()
  }

  getCars(){

    this.isLoading = true

    this.carsService.getAllCars().subscribe({
      next:(res)=>{
        this.cars = res.data
        console.log(this.cars)
      },
      error:()=>{
        this.toastr.error("error al obtener los carros","Error")

      },
      complete:()=>{
        this.isLoading = false
      }
    })
  }

  confirmChange(data:{licensePlate:string, status:boolean}){
    this.carsService.changeStatus(data.licensePlate,this.createStatusFromData(data.status)).subscribe({
      next:(res)=>{
        const car = this.cars.find( c => c.licensePlate == data.licensePlate)

        if(car){
          car.status = res.data.status
        }

        this.toastr.success("se cambio el estado con exito","Exito")

      },
      error:()=>{
        this.toastr.error("error al cambiar estado","Error")

      },
      complete:()=>{
        this.isLoading = false
      }
    }

    )
  }

  createStatusFromData(status:boolean){

    const formData = new FormData()

    const blobData = new Blob([JSON.stringify({status:!status})],{type:"application/json"})

    formData.append("data",blobData)

    return formData
  }
}
