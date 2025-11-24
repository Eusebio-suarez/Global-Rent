import { Routes } from "@angular/router";
import { ReservesPageComponent } from "./pages/reserves-page/reserves-page.component";
import { SearchComponent } from "./components/search/search.component";


export const RESERVES_ROUTES :Routes =[
    {
        path:"",
        component:ReservesPageComponent,
        children:[
            {
                path:"",
                component:SearchComponent
            }
        ]
    }
]