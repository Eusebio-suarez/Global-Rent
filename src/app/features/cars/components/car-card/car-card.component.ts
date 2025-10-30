import { Component, input } from '@angular/core';
import { Car } from '../../../../core/models/response/car';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-car-card',
  imports: [CurrencyPipe],
  templateUrl: './car-card.component.html'
})
export class CarCardComponent {
  car = input.required<Car>()
}
