import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-nav-bar',
  imports: [NgClass,RouterLink,RouterLinkActive],
  templateUrl: './admin-nav-bar.component.html'
})
export class AdminNavBarComponent {

  showMenu = signal<boolean>(false)

  toggle(){
    this.showMenu.update(value => !value)
    console.log(this.showMenu())
  }

}
