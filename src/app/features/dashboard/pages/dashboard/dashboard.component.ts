import { Component } from '@angular/core';
import { NavBarDashboardComponent } from "../../components/nav-bar-dashboard/nav-bar-dashboard.component";
import { AboutComponent } from "../../components/about/about.component";
import { ReviewCardComponent } from "../../components/review-card/review-card.component";
import { Review } from '../../../../core/models/review';
import { BrandsSectionComponent } from "../../components/brands-section/brands-section.component";

@Component({
  selector: 'app-dashboard',
  imports: [NavBarDashboardComponent, AboutComponent, ReviewCardComponent, BrandsSectionComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  reviews:Review[] = [
    {
      stars: 5,
      userAvatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
      userName: "Miguel Suárez",
      body: "Todo fue muy fácil desde la reserva hasta la entrega. El auto se veía bien cuidado y el servicio fue rápido.",
      date: "07/10/2025"
    },

    {
      stars: 4,
      userAvatar: "https://mockmind-api.uifaces.co/content/human/210.jpg",
      userName: "Carlos Pérez",
      body: "El proceso fue claro y el auto respondió muy bien durante todo el viaje. Me gustó la atención del equipo.",
      date: "05/10/2025"
    },

    {
      stars: 4,
      userAvatar: "https://mockmind-api.uifaces.co/content/human/125.jpg",
      userName: "Laura Gómez",
      body: "Reservar fue muy sencillo y el auto estaba impecable. Me encantó la comodidad del vehículo durante el viaje.",
      date: "03/10/2025"
    }
  ]

}
