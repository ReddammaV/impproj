import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class SharedModule { }
