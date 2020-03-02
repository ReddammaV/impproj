import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsingleRoutingModule } from './materialsingle-routing.module';
import { MaterialsingleComponent } from './materialsingle/materialsingle.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MaterialsingleComponent],
  imports: [
    CommonModule,
    MaterialsingleRoutingModule,
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class MaterialsingleModule { }
