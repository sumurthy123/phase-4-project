import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { HomeComponent } from './home/home.component';
import { ItalianComponent } from './italian/italian.component';
import { NonVegComponent } from './non-veg/non-veg.component';
import { VegComponent } from './veg/veg.component';

const routes: Routes = [
 {path: "veg",component:VegComponent},
  {path:"home",component:HomeComponent},
  {path:"evaluation",component:EvaluationComponent},
  {path:"non-veg",component:NonVegComponent},
  {path:"italian",component:ItalianComponent},
  {path:"admin",component:AdminComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
