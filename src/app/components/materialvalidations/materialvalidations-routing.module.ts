import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialvalidationsComponent } from './materialvalidations/materialvalidations.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MaterialvalidationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialvalidationsRoutingModule { }
