import { Injectable, signal } from '@angular/core';
import { AdminCarDTO } from '../../models/response/car';

@Injectable({
  providedIn: 'root'
})
export class UpdateCarModalService {

  selectedCar = signal<AdminCarDTO | null>(null)

  isOpen = signal<boolean>(false)

  toggle(){
    this.isOpen.update( v => !v)
  }

  setCar(car:AdminCarDTO){

    this.selectedCar.set(car)
  }
}
