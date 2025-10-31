import { Component, inject, input } from '@angular/core';
import { Car } from '../../../../core/models/response/car';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-card',
  imports: [CurrencyPipe],
  templateUrl: './car-card.component.html'
})
export class CarCardComponent {
  
  car = input.required<Car>()
  
  router:Router = inject(Router)

  reserve(){

    this.router.navigate(["reservations/reserve",this.car().model])
  }
}
