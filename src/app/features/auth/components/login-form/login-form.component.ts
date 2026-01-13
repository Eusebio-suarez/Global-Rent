import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NgClass } from '@angular/common';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { JwtService } from '../../../../core/services/jwt/jwt.service';
@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, RouterLink, NgClass],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {

  loginForm!:FormGroup

  private fb:FormBuilder = inject(FormBuilder)
  private authservice:AuthService = inject(AuthService)
  private toastr:ToastrService = inject(ToastrService)
  private router:Router = inject(Router)
  private jwt:JwtService = inject(JwtService)

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required,Validators.minLength(8)]]
    })
  }

  tryLogin(){
    this.authservice.login(this.loginForm.value).subscribe({
      next:(response)=>{
        
        this.toastr.success(response.message,"Exito")

        this.redirect()

      },
      error:(e:Error)=>{
        console.log(e)
        this.toastr.error(e.message)
      }
    })
  }

  redirect(){

    const role = this.jwt.getRole()

    switch(role){

      case "ROLE_USER":
        this.router.navigate(["/reserves"])
      break

      case "ROLE_ADMIN":
        this.router.navigate(["/admin"])
      break

      default:
        this.router.navigate(["/reserves"])
      break
    }

  }
}
