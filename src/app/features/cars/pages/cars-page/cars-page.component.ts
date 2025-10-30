import { Component } from '@angular/core';
import { NavBarDashboardComponent } from "../../../dashboard/components/nav-bar-dashboard/nav-bar-dashboard.component";
import { NavBarComponent } from "../../../../shared/components/nav-bar/nav-bar.component";
import { CarsComponent } from "../../components/cars/cars.component";

@Component({
  selector: 'app-cars-page',
  imports: [NavBarComponent, CarsComponent],
  templateUrl: './cars-page.component.html'
})
export class CarsPageComponent {

}
