import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexComponent } from './flex/flex.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FlexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexRoutingModule { }
