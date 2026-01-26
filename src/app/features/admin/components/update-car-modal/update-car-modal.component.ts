import { Component, effect, inject, OnInit, output } from '@angular/core';
import { UpdateCarModalService } from '../../../../core/services/admin/update-car-modal.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { AdminCarDTO } from '../../../../core/models/response/car';
import { AdminCarsService } from '../../../../core/services/admin/admin-cars.service';
@Component({
  selector: 'app-update-car-modal',
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './update-car-modal.component.html'
})
export class UpdateCarModalComponent implements OnInit {

  modalService = inject(UpdateCarModalService)

  adminCarService = inject(AdminCarsService)

  selectedCar = this.modalService.selectedCar

  updateForm!:FormGroup

  fB = inject(FormBuilder)

  selectedImage:File | null = null

  toastr = inject(ToastrService)

  refresh = output<void>()

  constructor(){
    effect(()=>{

      const car = this.selectedCar()
      
      if(!car){
        return
      }

      this.updateForm.reset()
      this.updateForm.patchValue(car)
    })
  }

  ngOnInit(){
    
    this.updateForm = this.fB.group({
      licensePlate:["",Validators.required],
      model:["",Validators.required],
      type:["",Validators.required],
      people:[0,Validators.required],
      bags:[0,Validators.required],
      price:[0,Validators.required],
    })
  }

  update(){

    const formData = new FormData()

    this.prepareFormData(formData)
    
    this.adminCarService.update(this.modalService.selectedCar()?.licensePlate??"",formData).subscribe({
      next:(res)=>{
        this.toastr.success("se actualizo con exito","Exito")
        this.refreshCars()
      },
      complete:()=>{
        this.modalService.toggle()
      },
      error:()=>{
        this.toastr.error("error al actualizar","Error")

      }
    })

  }

  selectImage(event:Event){
    
    const input = event.target as HTMLInputElement

    if(input.files){

      const file = input.files[0]

      if(file.size > 2 * 1000000){
        this.toastr.error("Formato o tamaño invalido", "Error")
      }

      this.selectedImage = file
    }
    
  }

  cancel(){
    this.selectedImage = null
    this.modalService.toggle()
  }


  prepareFormData(formData:FormData){

    const data:Partial<AdminCarDTO>  = {}

    Object.entries(this.updateForm.controls).forEach(([key,control])=>{
      
      if(control.valid && control.dirty){

        const field = key as keyof AdminCarDTO

        data[field] = control.value
      }
      
    })

    const blobData = new Blob([JSON.stringify(data)],{type:"application/json"})

    formData.append("data",blobData)

    if(this.selectedImage){

      formData.append("image",this.selectedImage)

    }
  }

  refreshCars(){
    this.refresh.emit()
  }
}
