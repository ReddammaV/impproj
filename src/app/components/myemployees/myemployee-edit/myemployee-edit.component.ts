import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Dboperation } from 'src/app/core/model/dboperation.enum';
import { Employee } from 'src/app/core/model/employee';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-myemployee-edit',
  templateUrl: './myemployee-edit.component.html',
  styleUrls: ['./myemployee-edit.component.scss']
})
export class MyemployeeEditComponent implements OnInit {

  submitted = false;
  employeeForm: FormGroup;
  formDataValues: any;
  dbops: Dboperation;
  employeeIdToUpdate = null;
  message = 'SAVE';
  allEmployees: Employee[];

  constructor(public router: Router, private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.setEmployeeForm();

    // for edit user
    let employeeId = window.localStorage.getItem("editUserId");
    if (!employeeId) {
      console.log("Invalid action.")
      this.router.navigate(['myemployees']);
      return;
    }
    this.employeeForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.compose([Validators.required,
      Validators.maxLength(10), Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required,
      Validators.maxLength(10), Validators.minLength(3)])],
      employeeCode: ['', Validators.required],
      address: ['', Validators.required],
      contactNumber: ['', Validators.required],
    });
    this.apiService.getEmployeeById(employeeId)
      .subscribe(data => {
        this.employeeForm.setValue(data);
      });
    // for edit user
  }

  // form
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

  // onsubmit
  onSubmit() {
    this.apiService.updateEmployee(this.employeeForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data) {
            console.log('Employee updated successfully.');
            this.router.navigate(['myemployees']);
          } else {
            console.log(data);
          }
        },
        error => {
          alert(error);
        });
  }

}
