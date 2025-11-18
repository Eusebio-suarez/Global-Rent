import { Component, input } from '@angular/core';
import { ReserveResponse } from '../../../../core/models/response/reserveResponse';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-reservation-card',
  imports: [CurrencyPipe],
  templateUrl: './historyReservation-card.component.html'
})
export class HistoryReservationCardComponent {
  reservation = input.required<ReserveResponse>()
}
