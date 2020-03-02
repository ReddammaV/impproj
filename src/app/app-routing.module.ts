import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'employee',
    loadChildren: () => import('./components/employees/employees.module').then(m => m.EmployeesModule),
  },
  {
    path: 'crud2',
    loadChildren: () => import('./components/crud2/crud2.module').then(m => m.Crud2Module),
  },
  {
    path: 'materialsingle',
    loadChildren: () => import('./components/materialsingle/materialsingle.module').then(m => m.MaterialsingleModule),
  },
  {
    path: 'materialcrud',
    loadChildren: () => import('./components/materialcrud/materialcrud.module').then(m => m.MaterialcrudModule),
  },
  {
    path: '',
    loadChildren: () => import('./components/myemployees/myemployees.module').then(m => m.MyemployeesModule),
  },
  // for validations
  {
    path: 'bootstrap-validations',
    loadChildren: () => import('./components/bootstrapvalidations/bootstrapvalidations.module').then(m => m.BootstrapvalidationsModule),
  },
  {
    path: 'material-validations',
    loadChildren: () => import('./components/materialvalidations/materialvalidations.module').then(m => m.MaterialvalidationsModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
