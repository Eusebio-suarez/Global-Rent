import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateCarModalService {

  isOpen = signal<boolean>(false)

  toggle(){
    this.isOpen.update( v => !v)
  }

  constructor() { }
}
