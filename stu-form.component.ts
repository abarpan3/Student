import { Student } from './../student';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stu-form',
  templateUrl: './stu-form.component.html',
  styleUrls: ['./stu-form.component.css']
})

export class StuFormComponent implements OnInit {

  studentForm:FormGroup
  students:Student[] = []

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.studentForm = this.fb.group({
      studentId:['',Validators.required],
      studentName:['',Validators.required],
      studentEmail:['',Validators.required]
    })
  }

  addStudent():void{

    let stu:Student = new Student(this.studentForm.controls.studentId.value,
                                  this.studentForm.controls.studentName.value,
                                  this.studentForm.controls.studentEmail.value)
    this.students.push(stu)
  }

}
