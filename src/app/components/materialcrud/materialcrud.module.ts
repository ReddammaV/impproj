import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialcrudRoutingModule } from './materialcrud-routing.module';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialAddComponent } from './material-add/material-add.component';
import { MaterialViewComponent } from './material-view/material-view.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MaterialListComponent, MaterialAddComponent, MaterialViewComponent],
  imports: [
    CommonModule,
    MaterialcrudRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [MaterialAddComponent],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ]
})
export class MaterialcrudModule { }
