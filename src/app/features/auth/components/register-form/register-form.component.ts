import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule,NgClass,RouterLink],
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {

  registerForm:FormGroup

  constructor(private fb:FormBuilder){
    this.registerForm = this.fb.group({
      "name":["",Validators.required],
      "email":["",[Validators.required,Validators.email]],
      "password":["",[Validators.minLength(8),Validators.required]]
    })
  }

  tryRegister(){
    console.log(this.registerForm.value)
  }
}
