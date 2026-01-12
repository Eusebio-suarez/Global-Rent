import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';
import { authenticationGuard } from './core/guards/authentication.guard';

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
        loadChildren: () => import("./features/auth/auth.routes").then(r => r.AUTH_ROUTES),
    },
    {
        path:"cars",
        loadChildren: () => import("./features/cars/cars.routes").then(r => r.CARS_ROUTES),
        canActivate:[authenticationGuard]
    },
    {
        path:"history",
        loadChildren: () => import("./features/history/history.routes").then(r => r.HISTORY_ROUTES),
        canActivate:[authenticationGuard]

    },
    {
        path:"reserves",
        loadChildren: () => import("./features/reserves/reserves.routes").then(r => r.RESERVES_ROUTES),
        canActivate:[authenticationGuard]

    }
]