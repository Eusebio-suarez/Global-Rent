import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"dashboard",
        pathMatch:'full'
    },
    {
        path:"dashboard",
        component:DashboardComponent
    },
    {
        path:"auth",
        loadChildren: () => import("./features/auth/auth.routes").then(r => r.AUTH_ROUTES)
    },
    {
        path:"cars",
        loadChildren: () => import("./features/cars/cars.routes").then(r => r.CARS_ROUTES)
    },
    {
        path:"reservations",
        loadChildren: () => import("./features/reservations/reservations.routes").then(r => r.RESERVATIONS_ROUTES)
    }
]