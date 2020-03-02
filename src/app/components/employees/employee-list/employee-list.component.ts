import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Employee } from '../../../core/model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  allEmployees: Employee[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  // getAll Employees
  getAllEmployees() {
    this.apiService.getAllEmployee().subscribe(
      (data) => {
        this.allEmployees = data;
        console.table(this.allEmployees);
      });
  }

  // edit Employee
  editEmployee(employee: Employee) {
    this.apiService.currentEmployee = Object.assign({}, employee);
  }

  // delete Employee
  deleteEmployee(id: number) {
    this.apiService.deleteEmployee(id).subscribe(
      (data) => {
        this.getAllEmployees();
      });
  }

}
