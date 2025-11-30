import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { ReserveDetails } from '../../models/request/reserveRequest';

@Injectable({
  providedIn: 'root'
})
export class ReserveDetailsService {

  reserveDetails = signal<ReserveDetails| null>(null)

  setDetails(details:ReserveDetails ){

    this.reserveDetails.set(details)
  }

}
