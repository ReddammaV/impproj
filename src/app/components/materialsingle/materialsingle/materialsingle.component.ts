import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Dboperation } from 'src/app/core/model/dboperation.enum';
import { ApiService } from 'src/app/services/api.service';
import { Employee } from 'src/app/core/model/employee';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-materialsingle',
  templateUrl: './materialsingle.component.html',
  styleUrls: ['./materialsingle.component.scss']
})
export class MaterialsingleComponent implements OnInit {
  submitted = false;
  employeeForm: FormGroup;
  formDataValues: any;
  dbops: Dboperation;
  employeeIdToUpdate = null;
  message = 'SAVE';
  allEmployees: Employee[];
  public dataSource = new MatTableDataSource;
  public displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'contactNumber',
    'employeeCode',
    'address',
    'options'
  ];

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
        this.dataSource.data = data;
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
  onSubmit(){
    this.submitted = false;
    let employee = this.employeeForm.value;
    this.createEmployee(employee);
    this.employeeForm.reset();
  }

  // createEmployee
  createEmployee(employee: Employee){
    if(this.employeeIdToUpdate == null) {
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
  editEmployee(employeeId: string){
    this.apiService.getEmployeeById(employeeId).subscribe( employee => {
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

  resetForm(){
    this.employeeForm.reset();
    this.message = 'SAVE';
    this.submitted = false;
  }
}
