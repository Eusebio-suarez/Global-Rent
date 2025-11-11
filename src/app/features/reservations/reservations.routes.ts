import { Routes } from "@angular/router";
import { ReservationPageComponent } from "./pages/reservation-page/reservation-page.component";
import { ReserveComponent } from "./components/reserve/reserve.component";
import { ReservationsListComponent } from "./components/reservations-list/reservations-list.component";

export const RESERVATIONS_ROUTES:Routes = [

    {
        path:"",
        component:ReservationPageComponent,
        children:[
            {
                path:"",
                component:ReservationsListComponent
            },
            {
                path:"reserve/:model",
                component:ReserveComponent
            }
        ]
    }
]