import { Component, inject, OnInit, output } from '@angular/core';
import { CreateCarModalService } from '../../../../core/services/admin/create-car-modal.service';
import { NgClass } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminCarsService } from '../../../../core/services/admin/admin-cars.service';

@Component({
  selector: 'app-create-car-modal',
  imports: [NgClass,ReactiveFormsModule],
  templateUrl: './create-car-modal.component.html'
})
export class CreateCarModalComponent implements OnInit {
  
  modalService = inject(CreateCarModalService)

  createForm!:FormGroup

  fb = inject(FormBuilder)

  selectedImage:File | null = null

  toastr = inject(ToastrService)

  adminCarsService = inject(AdminCarsService)

  refresh = output<void>()

  ngOnInit() {

    this.createForm = this.fb.group({
      licensePlate:["",Validators.required],
      model:["",[Validators.required]],
      type:["",Validators.required],
      people:[0,[Validators.required,Validators.min(1)]],
      bags:[0,[Validators.required,Validators.min(1)]],
      price:[0,[Validators.required,Validators.min(1)]],
      status:["",[Validators.required]]
    })
  }

  selectImage(event:Event){
    
    const input = event.target as HTMLInputElement

    if(input.files){

      const file = input.files[0]

      if(file.size > 2 * 1000000){
        this.toastr.error("Formato o tamaño invalido", "Error")
        return
      }

      this.selectedImage = file
    }
    
  }
  
  cancel(){

    this.createForm.reset({
      licensePlate:"",
      model:"",
      type:"",
      people:0,
      bags:0,
      price:0,
      status:""
    })
    this.selectedImage = null
    this.modalService.toggle()
  }

  create(){
    console.log(this.createForm.value);

    if(this.arePartsInvalid()){
      this.toastr.error("formulario incompleto o invalido","Error")
      return
    }

    this.adminCarsService.create(this.collectFormDataParts()).subscribe({
        next:(res)=>{
          this.toastr.success("carro creado correctamente","Exito")

        },
        complete:()=>{
          this.modalService.toggle()
          this.refreshCars()
        },
        error:()=>{
          this.toastr.error("error al crear el carro","Error")

        }
      }
    )
  }

  arePartsInvalid(){
    if(!this.createForm.invalid && this.selectedImage){
      return false
    }

    return true
  }

  collectFormDataParts(){

    const formData = new FormData()

    const blobData = new Blob([JSON.stringify(this.createForm.value)],{type:"application/json"})
    
    formData.append("data",blobData)

    if(this.selectedImage){

      formData.append("image",this.selectedImage)
    }

    return formData

  }

  refreshCars(){
    this.refresh.emit()
  }
}
