import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialsingleComponent } from './materialsingle/materialsingle.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MaterialsingleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsingleRoutingModule { }
