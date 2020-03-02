import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyemployeesRoutingModule } from './myemployees-routing.module';
import { MyemployeesComponent } from './myemployees/myemployees.component';
import { MyemployeeComponent } from './myemployee/myemployee.component';
import { MyemployeeListComponent } from './myemployee-list/myemployee-list.component';

import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyemployeeViewComponent } from './myemployee-view/myemployee-view.component';
import { MyemployeeEditComponent } from './myemployee-edit/myemployee-edit.component';

@NgModule({
  declarations: [MyemployeesComponent, MyemployeeComponent, MyemployeeListComponent, MyemployeeViewComponent, MyemployeeEditComponent],
  imports: [
    CommonModule,
    MyemployeesRoutingModule,
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  entryComponents: [MyemployeeComponent]
})
export class MyemployeesModule { }
