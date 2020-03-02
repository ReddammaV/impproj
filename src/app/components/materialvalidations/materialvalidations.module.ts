import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

import { MaterialvalidationsRoutingModule } from './materialvalidations-routing.module';
import { MaterialvalidationsComponent } from './materialvalidations/materialvalidations.component';


@NgModule({
  declarations: [MaterialvalidationsComponent],
  imports: [
    CommonModule,
    MaterialvalidationsRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    MaterialModule
  ]
})
export class MaterialvalidationsModule { }
