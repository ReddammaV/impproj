import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Employee } from '../../../core/model/employee';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { MaterialAddComponent } from '../material-add/material-add.component';
import { FormGroup } from '@angular/forms';
import { Dboperation } from '../../../core/model/dboperation.enum';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {
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

  constructor(private apiService: ApiService, public dialog: MatDialog, public dialogRef: MatDialogRef<MaterialAddComponent>) { }

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


  openDialog() {
    let dialogRef = this.dialog.open(MaterialAddComponent, {
      height: '400px',
      width: '600px',
    }); //DialogExampleComponent components are have to implement in entrycomponents in app.module
    // to update list after closing modal
    dialogRef.afterClosed().subscribe(result => {
      console.log("Row submitted");
      this.getAllEmployees();
    });
  }

  // editemployee
  editEmployee(employeeId: string) {
    let dialogRef = this.dialog.open(MaterialAddComponent, {
      height: '400px',
      width: '600px',
      data: {
        id: employeeId
      }
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log("Row submitted");
    //   this.updateData(result.data);
    // });
    // this.apiService.getEmployeeById(employeeId).subscribe( employee => {
    //   this.message = 'UPDATE';
    //   this.submitted = false;
    //   this.employeeIdToUpdate = employee.id;
    //   this.employeeForm.controls['firstName'].setValue(employee.firstName);
    //   this.employeeForm.controls['lastName'].setValue(employee.lastName);
    //   this.employeeForm.controls['employeeCode'].setValue(employee.employeeCode);
    //   this.employeeForm.controls['address'].setValue(employee.address);
    //   this.employeeForm.controls['contactNumber'].setValue(employee.contactNumber);
    // })
  }

  // forupdateData-edit
  updateData(employeeId: string) {
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

  // delete Employee
  deleteEmployee(id: number) {
    this.apiService.deleteEmployee(id).subscribe(
      (data) => {
        this.getAllEmployees();
      });
  }

}
