import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../core/model/employee';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'http://localhost:3000/Employees';
  allEmployee: Employee[];
  private employee: Employee;

  currentEmployee: Employee = {
    id: null,
    firstName: '',
    lastName: '',
    employeeCode: '',
    contactNumber: null,
    address: ''
  }

  // myemployee start
  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    // id: new FormControl(''),
    firstName: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
    employeeCode: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    contactNumber: new FormControl('', Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      // $key: null,
      firstName: '',
      lastName: '',
      employeeCode: '',
      address: '',
      contactNumber: '',
    });
  }

  // edit
  populateForm(employee) {
    this.form.setValue(employee);
  }
  // to insert
  // insertEmployee(employee) {
  //   this.employeeList.push({
  //     firstName: employee.firstName,
  //     lastName: employee.lastName,
  //     employeeCode: employee.employeeCode,
  //     address: employee.address,
  //     contactNumber: employee.contactNumber
  //   });
  // }
  // myemployee end

  constructor(private http: HttpClient) { }

  // getAll Employees
  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  // post Employee
  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, employee, headerOption);
  }

  // update Employee
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.url + '/' + employee.id, employee, headerOption);
  }

  // delete Employee
  deleteEmployee(id: Number): Observable<Employee> {
    return this.http.delete<Employee>(this.url + '/' + id, headerOption);
  }

  // getEmployeeById
  getEmployeeById(employeeId: string): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/' + employeeId)
  }

  // Single employee  
  getEmployee(employeeId: string): Observable<Employee>{
    return this.http.get<Employee>(this.url + '/' + employeeId);
  }

  // for edit
  setter(employee:Employee){
    this.employee = employee;
  }
  getter(){
    return this.employee;
  }
  // for edit
}
