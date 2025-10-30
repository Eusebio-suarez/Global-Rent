import { Route, Routes } from "@angular/router";
import { CarsPageComponent } from "./pages/cars-page/cars-page.component";


export const CARS_ROUTES:Routes = [

    {
        path:"",
        component:CarsPageComponent
    }
]