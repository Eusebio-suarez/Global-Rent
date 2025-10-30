import { Component, input } from '@angular/core';
import { Car } from '../../../../core/models/response/car';

@Component({
  selector: 'app-car-card',
  imports: [],
  templateUrl: './car-card.component.html'
})
export class CarCardComponent {
  car = input.required<Car>()
}
