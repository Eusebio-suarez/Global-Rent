import { Routes } from "@angular/router";
import { HistoryPageComponent } from "./pages/reservation-page/history-page.component";
import { ReserveComponent } from "./components/reserve/reserve.component";
import { HistoryReservationsListComponent } from "./components/history-reservations-list/historyReservations-list.component";

export const HISTORY_ROUTES:Routes = [

    {
        path:"",
        component:HistoryPageComponent,
        children:[
            {
                path:"",
                component:HistoryReservationsListComponent
            },
            {
                path:"reserve/:model",
                component:ReserveComponent
            }
        ]
    }
]