import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../../../../shared/components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-reservation-page',
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './reservation-page.component.html'
})
export class ReservationPageComponent {

}
