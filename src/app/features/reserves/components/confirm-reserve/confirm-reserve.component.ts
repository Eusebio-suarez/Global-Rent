import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-confirm-reserve',
  imports: [],
  templateUrl: './confirm-reserve.component.html'
})
export class ConfirmReserveComponent {

  isOpen = input<boolean>(false)

  close = output<void>()

  confirm = output<void>()

  closeModal(){
    this.close.emit()
  }

  confirmReserve(){
    this.confirm.emit()
  }
}