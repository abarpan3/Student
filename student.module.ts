import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuFormComponent } from './stu-form/stu-form.component';



@NgModule({
  declarations: [StuFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [
    StuFormComponent
  ]
})
//We need to import StudentModule in the app.module.ts under imports
export class StudentModule { }
