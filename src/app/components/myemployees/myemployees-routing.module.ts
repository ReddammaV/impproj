import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyemployeesComponent } from './myemployees/myemployees.component';
import { MyemployeeComponent } from './myemployee/myemployee.component';
import { MyemployeeViewComponent } from './myemployee-view/myemployee-view.component';
import { MyemployeeEditComponent } from './myemployee-edit/myemployee-edit.component';


const routes: Routes = [
  {
    path: 'myemployees',
    component: MyemployeesComponent
    // children: [
    //   {
    //     path: '',
    //     component: MyemployeesComponent
    //   }
    // ]
  },
  { path: 'myemployee-add', component: MyemployeeComponent},
  { path: 'myemployee-edit/:id', component: MyemployeeEditComponent},
  { path: 'myemployee-view/:id', component: MyemployeeViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyemployeesRoutingModule { }
