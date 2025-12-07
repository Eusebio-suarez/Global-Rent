import { Component, inject, OnInit } from '@angular/core';
import { ReserveResponse } from '../../../../core/models/response/reserveResponse';
import { ReservationsService } from '../../../../core/services/reserves/reservations.service';
import { ToastrService } from 'ngx-toastr';
import { HistoryReservationCardComponent } from "../history-reservation-card/historyReservation-card.component";
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-reservations-list',
  imports: [HistoryReservationCardComponent,RouterLink],
  templateUrl: './historyReservations-list.component.html'
})
export class HistoryReservationsListComponent implements OnInit {

  reservationsService:ReservationsService = inject(ReservationsService)

  toastr :ToastrService = inject(ToastrService)

  isLoading:boolean = false

  reservations!: ReserveResponse[]

  ngOnInit(){

    this.isLoading = true
    
    this.reservationsService.getReservations().subscribe({
      next:(response)=>{

        this.reservations = response.data
        this.isLoading = false

      },
      error:(e)=>{
        this.toastr.error(e.message,"Error")
      }
    })
  }

}
