import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BootstrapvalidationsRoutingModule } from './bootstrapvalidations-routing.module';
import { BootstrapvalidationsComponent } from './bootstrapvalidations/bootstrapvalidations.component';


@NgModule({
  declarations: [BootstrapvalidationsComponent],
  imports: [
    CommonModule,
    BootstrapvalidationsRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class BootstrapvalidationsModule { }
