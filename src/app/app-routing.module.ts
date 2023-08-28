import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsurancesComponent } from './components/insurances/insurances.component';

const routes: Routes = [

  {path:'home', component: InsurancesComponent},
  {path:'tableaux/:id', component: InsurancesComponent},
  {path:'',
  redirectTo: '/home',
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
