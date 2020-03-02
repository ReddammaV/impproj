import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Crud2RoutingModule } from './crud2-routing.module';
import { SinglepagecrudComponent } from './singlepagecrud/singlepagecrud.component';


@NgModule({
  declarations: [SinglepagecrudComponent],
  imports: [
    CommonModule,
    Crud2RoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class Crud2Module { }
