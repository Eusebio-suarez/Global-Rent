import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';


import { NgClass } from '@angular/common';
@Component({
  selector: 'app-search',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule , NgClass],
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  hours:string[] = []

  fb:FormBuilder = inject(FormBuilder)

  searchForm!:FormGroup

  minStartDate!:Date;
  minStartTextDate!: string;

  maxStartDate!: Date;
  maxStartTextDate!: string;

  minEndDate!: Date;
  minEndTextDate!: string;

  maxEndDate!: Date;
  maxEndTextDate!: string;



  ngOnInit(): void {

    this.initForm()

    this.subscribeForm()

    this.calculateHours()

    this.calculateStartTextDates()

  }

  calculateHours(){
    for(let h = 0; h < 24; h++){
      
      for(let m of ["00","30"]){

        this.hours.push(String(h).padStart(2,"0")+":"+m)
      }
    }
  }

  initForm(){
    this.searchForm = this.fb.group({
      startPlace:["Aeropuerto",[Validators.required]],
      endPlace:["Aeropuerto",[Validators.required]],
      startDate:["",[Validators.required]],
      startTime:["12:00",[Validators.required]],
      endDate:["",[Validators.required]],
      endTime:["12:00",[Validators.required]]
    })
  }

  subscribeForm(){
    //al iniciar se desactiva la fecha de inicio por defecto
    this.searchForm.get("endDate")?.disable()

    this.searchForm.get("startDate")?.valueChanges.subscribe((value)=>{

      this.searchForm.get("endDate")?.reset()

      if(value){
        this.searchForm.get("endDate")?.enable()
        this.calculateEndDates()
      }
      else{
        this.searchForm.get("endDate")?.disable()
      }

    })
  }

  calculateMinStartTextDate(){

    this.minStartDate = new Date()

    this.minStartDate.setDate(this.minStartDate.getDate() + 1)

    const year = this.minStartDate.getFullYear()
    const month = (this.minStartDate.getMonth()+1).toString().padStart(2,"0")
    const day = this.minStartDate.getDate().toString().padStart(2,"0")

    this.minStartTextDate = `${year}-${month}-${day}`

  }

  calculateMaxStartTextDate(){
    
    this.maxStartDate = this.minStartDate

    this.maxStartDate.setMonth(this.maxStartDate.getMonth()+1)

    const year = this.maxStartDate.getFullYear()

    const month = (this.maxStartDate.getMonth()+1).toString().padStart(2,"0")

    const day = this.maxStartDate.getDate().toString().padStart(2,"0")

    this.maxStartTextDate = `${year}-${month}-${day}`
  }

  calculateStartTextDates(){

    this.calculateMinStartTextDate()

    this.calculateMaxStartTextDate()
  }

  calculateEndDates(){

    this.calculateMinEndTextDate()

    this.calculateMaxEndTextDate()
  }

  calculateMinEndTextDate() {
    
    this.minEndDate = new Date(this.searchForm.get("startDate")?.value)

    /*se nesecita esta fecha exacta pero el navegador
    resta el desplazamiento de la hora local por lo que
    puede modificar el dia de la fecha*/
    
    //Corregir el desplazamiento por zona horaria
    this.minEndDate.setMinutes(this.minEndDate.getMinutes()+ this.minEndDate.getTimezoneOffset())


    //la fecha de find debe ser al menos un dia despues de la fecha de inicio
    this.minEndDate.setDate(this.minEndDate.getDate() + 1)

    const year = this.minEndDate.getFullYear()
    const month = (this.minEndDate.getMonth()+1).toString().padStart(2,"0")
    const day = this.minEndDate.getDate().toString().padStart(2,"0")

    this.minEndTextDate = `${year}-${month}-${day}`

  }

  calculateMaxEndTextDate() {
    this.maxEndDate = this.minEndDate

    this.maxEndDate.setMonth(this.maxEndDate.getMonth() + 1)

    const year = this.maxEndDate.getFullYear()

    const month = (this.maxEndDate.getMonth()+1).toString().padStart(2,"0")

    const day = this.maxEndDate.getDate().toString().padStart(2,"0")

    this.maxEndTextDate = `${year}-${month}-${day}`

  }

  showinfo(){
    console.log(this.searchForm.value)
  }
}
