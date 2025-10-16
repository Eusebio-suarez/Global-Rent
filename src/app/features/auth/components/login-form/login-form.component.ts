import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, RouterLink, NgClass],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

  loginForm : FormGroup

  constructor(private fb:FormBuilder){

    this.loginForm = this.fb.group({
      email: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required,Validators.minLength(8)]]
    })
  }

  tryLogin(){
    console.log(this.loginForm.value)
  }
}
