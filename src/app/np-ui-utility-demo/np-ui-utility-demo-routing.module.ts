import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiUtilityDemoComponent } from './np-ui-utility-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpUiUtilityDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiUtilityDemoRoutingModule { }
