import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { AdminNavBarComponent } from "../../components/admin-nav-bar/admin-nav-bar.component";

@Component({
  selector: 'app-admin-page',
  imports: [RouterOutlet, AdminNavBarComponent],
  templateUrl: './admin-page.component.html'
})
export class AdminPageComponent {

}
