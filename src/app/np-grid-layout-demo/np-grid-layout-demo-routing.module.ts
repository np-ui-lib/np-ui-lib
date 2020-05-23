import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpGridLayoutDemoComponent } from './np-grid-layout-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NpGridLayoutDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpGridLayoutDemoRoutingModule { }
