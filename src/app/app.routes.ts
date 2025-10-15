import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';
import { AuthPageComponent } from './features/auth/pages/auth-page/auth-page.component';
import { AUTH_ROUTES } from './features/auth/auth.routes';

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
]