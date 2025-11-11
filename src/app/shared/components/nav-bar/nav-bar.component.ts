import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

  showMenu = signal<boolean>(true)


  toggle(){
    this.showMenu.update(value => !value)
    console.log(this.showMenu())
  }

}
