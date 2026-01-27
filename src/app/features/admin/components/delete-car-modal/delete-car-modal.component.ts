import { Component, inject, output } from '@angular/core';
import { DeleteCarModalService } from '../../../../core/services/admin/delete-car-modal.service';
import { AdminCarsService } from '../../../../core/services/admin/admin-cars.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-car-modal',
  imports: [],
  templateUrl: './delete-car-modal.component.html'
})
export class DeleteCarModalComponent {

  modalService = inject(DeleteCarModalService)

  car = this.modalService.car

  adminCarsService = inject(AdminCarsService)

  toastr = inject(ToastrService)

  refresh = output<void>()

  cancel(){
    this.modalService.toggle()
  }

  confirmDelete(){
    this.adminCarsService.delete(this.car()?.licensePlate??"").subscribe({
      next:()=>{
        this.toastr.success("carro eliminado con exito","Exito")
      },
      error:()=>{
        this.toastr.error("error al eliminar el carro","Eror")
      },
      complete:()=>{
        this.refreshCars()
        this.modalService.toggle()
      }
    })
  }

  refreshCars(){
    this.refresh.emit()
  }
}
