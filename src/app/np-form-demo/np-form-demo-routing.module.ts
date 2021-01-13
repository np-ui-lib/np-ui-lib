import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpFormDemoComponent } from './np-form-demo.component';

const routes: Routes = [{
  path: '',
  component: NpFormDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpFormDemoRoutingModule { }
