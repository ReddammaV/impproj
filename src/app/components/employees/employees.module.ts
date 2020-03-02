import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';


@NgModule({
  declarations: [EmployeeComponent, EmployeeListComponent, EmployeeLayoutComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class EmployeesModule { }
