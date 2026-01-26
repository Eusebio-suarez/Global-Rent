import { Component, effect, inject, output } from '@angular/core';
import { ChangeStatusModalService } from '../../../../core/services/admin/change-status-modal.service';

@Component({
  selector: 'app-change-status-modal',
  imports: [],
  templateUrl: './change-status-modal.component.html'
})
export class ChangeStatusModalComponent {

  modalService = inject(ChangeStatusModalService)

  newStatus:string | null = null

  confirm = output<{licensePlate:string, status:boolean}>()

  car = this.modalService.car

  constructor(){

    effect(()=>{
      
      this.newStatus = this.modalService.car()?.status? "Desactivado" : "Activado"
    })
  }

  cancel(){
    this.modalService.toggle()
  }

  confirmChange(){
    this.confirm.emit(
      {
        licensePlate: this.car()?.licensePlate??"",
        status: this.car()?.status??false
      }
    )
    this.modalService.toggle()
  }
}
