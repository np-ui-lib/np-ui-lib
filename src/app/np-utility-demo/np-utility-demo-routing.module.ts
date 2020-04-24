import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUtilityDemoComponent } from './np-utility-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpUtilityDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUtilityDemoRoutingModule { }
