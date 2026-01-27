import { Injectable, signal } from '@angular/core';
import { AdminCarDTO } from '../../models/response/car';

@Injectable({
  providedIn: 'root'
})
export class DeleteCarModalService {

  car = signal<Partial<AdminCarDTO>|null>(null)

  isOpen = signal<boolean>(false)

  toggle(){
    this.isOpen.update( v => !v)
    
  }

  setCar(car:Partial<AdminCarDTO> ){

    this.car.set(null)
    this.car.set(car)
  }
}
