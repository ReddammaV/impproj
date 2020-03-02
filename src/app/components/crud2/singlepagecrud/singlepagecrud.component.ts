import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Dboperation } from '../../../core/model/dboperation.enum';
import { ApiService } from '../../../services/api.service';
import { Employee } from '../../../core/model/employee';

@Component({
  selector: 'app-singlepagecrud',
  templateUrl: './singlepagecrud.component.html',
  styleUrls: ['./singlepagecrud.component.scss']
})
export class SinglepagecrudComponent implements OnInit {
  employeeForm: FormGroup;
  submitted = false;
  formDataValues: any;
  dbops: Dboperation;
  allEmployees: Employee[];
  employeeIdToUpdate = null;
  message = 'SAVE';

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.setEmployeeForm();
    this.getAllEmployees();
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
    this.getAllEmployees();
  }

  // convenience getter for easy access to form fields
  get f() { return this.employeeForm.controls; }

  // getAll Employees
  getAllEmployees() {
    this.apiService.getAllEmployee().subscribe(
      (data) => {
        this.allEmployees = data;
        console.table(this.allEmployees);
      });
  }

  // delete Employee
  deleteEmployee(id: number) {
    this.apiService.deleteEmployee(id).subscribe(
      (data) => {
        this.getAllEmployees();
      });
  }

  // form Submit
  onSubmit() {
    this.submitted = true;
    if (this.employeeForm.invalid) {
      return;
    } else {
      this.submitted = false;
      let employee = this.employeeForm.value;
      this.createEmployee(employee);
      this.employeeForm.reset();
    }
  }

  // createEmployee
  createEmployee(employee: Employee) {
    if (this.employeeIdToUpdate == null) {
      this.apiService.createEmployee(employee).subscribe(
        () => {
          this.submitted = true;
          this.message = "Record Saved Successfully";
          this.getAllEmployees();
          this.employeeIdToUpdate = null;
          this.resetForm();
        }
      )
    } else {
      employee.id = this.employeeIdToUpdate;
      this.apiService.updateEmployee(employee).subscribe(
        () => {
          this.submitted = true;
          this.message = "Record Updated Successfully";
          this.getAllEmployees();
          this.employeeIdToUpdate = null;
          this.resetForm();
        }
      )
    }
  }

  // editemployee
  editEmployee(employeeId: string) {
    this.apiService.getEmployeeById(employeeId).subscribe(employee => {
      this.message = 'UPDATE';
      this.submitted = false;
      this.employeeIdToUpdate = employee.id;
      this.employeeForm.controls['firstName'].setValue(employee.firstName);
      this.employeeForm.controls['lastName'].setValue(employee.lastName);
      this.employeeForm.controls['employeeCode'].setValue(employee.employeeCode);
      this.employeeForm.controls['address'].setValue(employee.address);
      this.employeeForm.controls['contactNumber'].setValue(employee.contactNumber);
    })
  }

  resetForm() {
    this.employeeForm.reset();
    this.message = 'SAVE';
    this.submitted = false;
  }


}

