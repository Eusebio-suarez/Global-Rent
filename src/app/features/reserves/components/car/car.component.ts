import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../../../../core/models/response/car';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-car',
  imports: [CurrencyPipe],
  templateUrl: './car.component.html'
})
export class CarComponent {
    
  car = input.required<Car>()
  
  router:Router = inject(Router)

  reserve(){

    this.router.navigate(["reserves/reserve",this.car().model])
  }
}
