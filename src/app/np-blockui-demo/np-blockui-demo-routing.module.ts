import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpBlockuiDemoComponent } from './np-blockui-demo.component';

const routes: Routes = [
  {
    path: "",
    component: NpBlockuiDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpBlockuiDemoRoutingModule { }
