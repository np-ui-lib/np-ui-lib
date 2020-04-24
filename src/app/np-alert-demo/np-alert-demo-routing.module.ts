import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpAlertDemoComponent } from './np-alert-demo.component';

const routes: Routes = [
  {
    path: "",
    component: NpAlertDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpAlertDemoRoutingModule { }
