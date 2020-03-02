import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EmployeeLayoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
