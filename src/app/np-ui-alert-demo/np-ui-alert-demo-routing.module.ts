import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiAlertDemoComponent } from './np-ui-alert-demo.component';

const routes: Routes = [
  {
    path: "",
    component: NpUiAlertDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiAlertDemoRoutingModule { }
