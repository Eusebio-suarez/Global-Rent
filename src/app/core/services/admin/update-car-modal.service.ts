import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateCarModalService {

  isOpen = signal<boolean>(false)

  toggle(){
    this.isOpen.update( v => !v)
  }
}
