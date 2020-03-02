import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglepagecrudComponent } from './singlepagecrud/singlepagecrud.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SinglepagecrudComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Crud2RoutingModule { }
