import { Routes } from "@angular/router";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { RegisterFormComponent } from "./components/register-form/register-form.component";
import { AuthPageComponent } from "./pages/auth-page/auth-page.component";


export const AUTH_ROUTES:Routes = [

    {
        path: "",
        pathMatch: "full",
        redirectTo: "login"

    },
    {
        path: "",
        component: AuthPageComponent,
        children:[
            {
                path: "login",
                component: LoginFormComponent
            },
            {
                path: "register",
                component: RegisterFormComponent
            }
        ]
    }
]