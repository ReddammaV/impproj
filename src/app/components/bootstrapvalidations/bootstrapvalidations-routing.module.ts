import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapvalidationsComponent } from './bootstrapvalidations/bootstrapvalidations.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BootstrapvalidationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapvalidationsRoutingModule { }
