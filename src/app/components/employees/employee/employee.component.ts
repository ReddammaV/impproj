import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Dboperation } from 'src/app/core/model/dboperation.enum';
import { ApiService } from 'src/app/services/api.service';
import { Employee } from 'src/app/core/model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  submitted = false;
  formDataValues: any;
  dbops: Dboperation;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.setEmployeeForm();
  }

  setEmployeeForm() {
    // dboperation
    this.dbops = Dboperation.create;

    console.log("Welcome employee form");
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required,
      Validators.maxLength(10), Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required,
      Validators.maxLength(10), Validators.minLength(3)])],
      employeeCode: ['', Validators.required],
      address: ['', Validators.required],
      contactNumber: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.employeeForm.controls; }


  // onsubmit form
  // onSubmit(formData: any) {
  //   this.submitted = true;
  //   // stop here if form is invalid
  //   if (this.employeeForm.invalid) {
  //     return;
  //   } else {
  //     console.log('employeeForm', this.employeeForm.value);
  //     this.formDataValues = this.employeeForm.value;
  //     console.log(this.formDataValues);
  //   }
  // }

  onSubmit(formData: any) {
    switch (this.dbops) {
      // post - create
      case Dboperation.create:
        this.submitted = true;
        // stop here if form is invalid
        if (this.employeeForm.invalid) {
          return;
        } else {
          this.apiService.createEmployee(this.employeeForm.value)
            .subscribe(data => {
              console.log("Created");
            });
        }
        break;

      // put - update
      case Dboperation.update:
        // this.apiService.updateEmployee(this.employeeForm.value)
        // .subscribe(data => {
        //   console.log("Updated");
        // });
        break;

      // default:
      //   break;
    }

  }

  // reset
  onReset() {
    this.submitted = false;
    this.employeeForm.reset();
  }
}


