import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpMaskDemoComponent } from './np-mask-demo.component';

const routes: Routes = [{
  component: NpMaskDemoComponent,
  path: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpMaskDemoRoutingModule { }
