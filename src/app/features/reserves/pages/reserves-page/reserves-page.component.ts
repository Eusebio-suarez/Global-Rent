import { Component } from '@angular/core';
import { NavBarComponent } from "../../../../shared/components/nav-bar/nav-bar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-reserves-page',
  imports: [NavBarComponent, RouterOutlet],
  templateUrl: './reserves-page.component.html'
})
export class ReservesPageComponent {

}
