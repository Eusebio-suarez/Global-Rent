import { Component, input } from '@angular/core';
import { ReserveResponse } from '../../../../core/models/response/reserveResponse';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-reservation-card',
  imports: [CurrencyPipe],
  templateUrl: './reservation-card.component.html'
})
export class ReservationCardComponent {
  reservation = input.required<ReserveResponse>()
}
