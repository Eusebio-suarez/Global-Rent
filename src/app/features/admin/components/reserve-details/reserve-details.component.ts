import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminReserveResponse } from '../../../../core/models/response/reserveResponse';
import { AdminReservesService } from '../../../../core/services/admin/admin-reserves.service';
import { ToastrService } from 'ngx-toastr';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-reserve-details',
  imports: [CurrencyPipe],
  templateUrl: './reserve-details.component.html'
})
export class ReserveDetailsComponent implements OnInit {
  
  router = inject(ActivatedRoute)

  reserve!:AdminReserveResponse

  reservesService = inject(AdminReservesService)

  toastr = inject(ToastrService)

  ngOnInit(){

    const id = this.router.snapshot.params["id"]

    this.reservesService.getById(id).subscribe({
      next:(res)=>{
        this.reserve = res.data
      },
      error:()=>{
        this.toastr.error("Error","error al obtener detalles")
      }
    })

  }
  
}
