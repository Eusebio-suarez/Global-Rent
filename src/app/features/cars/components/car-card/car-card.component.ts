import { Component, input } from '@angular/core';
import { Car } from '../../../../core/models/response/car';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-card',
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './car-card.component.html'
})
export class CarCardComponent {
  
  car = input.required<Car>()

}
