import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../../../../shared/components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-reservation-page',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './reservation-page.component.html'
})
export class ReservationPageComponent {

}
