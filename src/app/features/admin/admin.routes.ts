import { Routes } from "@angular/router";
import { AdminPageComponent } from "./pages/admin-page/admin-page.component";
import { CarsListComponent } from "./components/cars-list/cars-list.component";
import { ReservesListComponent } from "./components/reserves-list/reserves-list.component";
import { ReserveDetailsComponent } from "./components/reserve-details/reserve-details.component";

export const ADMIN_ROUTES:Routes = [

    {
        path:"",
        component:AdminPageComponent,
        children:[
            {
                path:"",
                redirectTo:"reserves",
                pathMatch:"full"
            },
            {
                path:"reserves",
                component:ReservesListComponent
            },
            {
                path:"reserves/:id",
                component:ReserveDetailsComponent
            },
            {
                path:"cars",
                component:CarsListComponent
            }
        ]
    }

]