import { Component, inject, OnInit } from '@angular/core';
import { AdminCarsService } from '../../../../core/services/admin/admin-cars.service';
import { AdminCarDTO } from '../../../../core/models/response/car';
import { ToastrService } from 'ngx-toastr';
import { CarAdminCardComponent } from '../car-admin-card/car-admin-card.component';
import { UpdateCarModalComponent } from "../update-car-modal/update-car-modal.component";

@Component({
  selector: 'app-cars-list',
  imports: [CarAdminCardComponent, UpdateCarModalComponent],
  templateUrl: './cars-list.component.html'
})
export class CarsListComponent implements OnInit {

  cars!:AdminCarDTO[]

  carsService = inject(AdminCarsService)

  toastr = inject(ToastrService)

  isLoading = false

  ngOnInit() {

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

}
