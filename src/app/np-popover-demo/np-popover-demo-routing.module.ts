import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpPopoverDemoComponent } from './np-popover-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NpPopoverDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpPopoverDemoRoutingModule { }
