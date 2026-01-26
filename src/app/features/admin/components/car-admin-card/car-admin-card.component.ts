import { Component, inject, input } from '@angular/core';
import { AdminCarDTO } from '../../../../core/models/response/car';
import { CurrencyPipe, NgClass } from '@angular/common';
import { UpdateCarModalService } from '../../../../core/services/admin/update-car-modal.service';

@Component({
  selector: 'app-car-admin-card',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './car-admin-card.component.html'
})
export class CarAdminCardComponent {

  car = input.required<AdminCarDTO>()

  updateCarModal = inject(UpdateCarModalService)

  selectCar(){

    this.updateCarModal.toggle()

    this.updateCarModal.setCar(this.car())
  }
}


