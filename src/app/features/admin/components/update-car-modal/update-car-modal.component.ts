import { Component, inject } from '@angular/core';
import { UpdateCarModalService } from '../../../../core/services/admin/update-car-modal.service';

@Component({
  selector: 'app-update-car-modal',
  imports: [],
  templateUrl: './update-car-modal.component.html'
})
export class UpdateCarModalComponent {

  modalService = inject(UpdateCarModalService)

}
