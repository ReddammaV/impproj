import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Dboperation } from 'src/app/core/model/dboperation.enum';
import { Employee } from 'src/app/core/model/employee';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myemployee',
  templateUrl: './myemployee.component.html',
  styleUrls: ['./myemployee.component.scss']
})
export class MyemployeeComponent implements OnInit {

  submitted = false;
  employeeForm: FormGroup;
  formDataValues: any;
  dbops: Dboperation;
  employeeIdToUpdate = null;
  allEmployees: Employee[];

  constructor(public router: Router, private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.setEmployeeForm();
  }

  setEmployeeForm() {
    // dboperation
    this.dbops = Dboperation.create;
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required,
      Validators.maxLength(10), Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required,
      Validators.maxLength(10), Validators.minLength(3)])],
      employeeCode: ['', Validators.required],
      address: ['', Validators.required],
      contactNumber: ['', Validators.required],
    });
    // this.getAllEmployees();
  }

  // convenience getter for easy access to form fields
  get f() { return this.employeeForm.controls; }

  // form Submit
  onSubmit() {
    this.submitted = false;
    let employee = this.employeeForm.value;
    this.createEmployee(employee);
    console.log("submitted");
  }

  // createEmployee
  createEmployee(employee: Employee) {
    this.apiService.createEmployee(employee).subscribe(
      () => {
        console.log("Record Saved Successfully");
        this.employeeIdToUpdate = null;
        this.router.navigate(['/myemployees']);
      })
  }


}
