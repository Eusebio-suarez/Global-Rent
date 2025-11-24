import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../../../../core/services/auth/register.service';
@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule,NgClass,RouterLink],
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {

  registerForm:FormGroup

  toastr:ToastrService = inject(ToastrService)

  registerService:RegisterService = inject(RegisterService)

  router:Router = inject(Router)

  constructor(private fb:FormBuilder){
    this.registerForm = this.fb.group({
      "name":["",Validators.required],
      "email":["",[Validators.required,Validators.email]],
      "password":["",[Validators.minLength(8),Validators.required]]
    })
  }

  tryRegister(){
    
    this.registerService.tryRegister(this.registerForm.value).subscribe({
      next:(response) =>{
        this.toastr.success(response.message,"Exito")

        this.router.navigate(["/auth"])
      },
      error:(e:Error) =>{
        this.toastr.error(e.message)
      }
    })
  }
}
