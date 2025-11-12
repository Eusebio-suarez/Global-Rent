import { Component, inject, OnInit } from '@angular/core';
import { ReserveResponse } from '../../../../core/models/response/reserveResponse';
import { ReservationsService } from '../../../../core/services/reservations.service';
import { ToastrService } from 'ngx-toastr';
import { ReservationCardComponent } from "../reservation-card/reservation-card.component";

@Component({
  selector: 'app-reservations-list',
  imports: [ReservationCardComponent],
  templateUrl: './reservations-list.component.html'
})
export class ReservationsListComponent implements OnInit {

  reservationsService:ReservationsService = inject(ReservationsService)

  toastr :ToastrService = inject(ToastrService)

  reservations: ReserveResponse[] = []

  ngOnInit(){
    
    this.reservationsService.getReservations().subscribe({
      next:(response)=>{
        this.reservations = response.data
            console.log(this.reservations);

      },
      error:(e)=>{
        this.toastr.error(e.message,"Error")
      }
    })

    
  }

}
