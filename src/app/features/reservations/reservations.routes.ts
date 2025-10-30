import { Routes } from "@angular/router";
import { ReservationPageComponent } from "./pages/reservation-page/reservation-page.component";
import { ReserveComponent } from "./components/reserve/reserve.component";

export const RESERVATIONS_ROUTES:Routes = [

    {
        path:"",
        component:ReservationPageComponent,
        pathMatch:"full"
    },
    {
        path:"reserve/:model",
        component:ReserveComponent
    }
]