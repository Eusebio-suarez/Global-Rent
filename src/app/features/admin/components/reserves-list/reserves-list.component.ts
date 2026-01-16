import { Component, inject, OnInit } from '@angular/core';
import { AdminReserveResponse } from '../../../../core/models/response/reserveResponse';
import { AdminReservesService } from '../../../../core/services/admin/admin-reserves.service';
import { ToastrService } from 'ngx-toastr';
import { CurrencyPipe } from '@angular/common';
import { ReservesInfoComponent } from '../reserves-info/reserves-info.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-reserves-list',
  imports: [CurrencyPipe, ReservesInfoComponent, RouterLink],
  templateUrl: './reserves-list.component.html'
})
export class ReservesListComponent implements OnInit {

  reserves!:AdminReserveResponse[]

  adminService = inject(AdminReservesService)

  toastr = inject(ToastrService)

  isLoading = false

  ngOnInit() {

    this.isLoading = true

    this.adminService.getAllReserves().subscribe(

      {
        next:(response)=>{

          this.reserves = response.data
          console.log(this.reserves)
        },

        error:(err)=> {

          this.toastr.error("error al obtener reservas","Error")
        },
        complete:()=>{
          this.isLoading = false
        }
      }
    )

  }

}
