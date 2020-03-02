import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Employee } from '../../../core/model/employee';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { Dboperation } from '../../../core/model/dboperation.enum';
import { MyemployeeComponent } from '../myemployee/myemployee.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myemployee-list',
  templateUrl: './myemployee-list.component.html',
  styleUrls: ['./myemployee-list.component.scss']
})
export class MyemployeeListComponent implements OnInit {
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

  constructor(private apiService: ApiService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.getAllEmployees();
  }

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

  //edit
  editEmployee(user, id){
    console.log(user);
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['/myemployee-edit', id]);
  }

}
