import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpStepsDemoComponent } from './np-steps-demo.component';

const routes: Routes = [ {
  path: '',
  component: NpStepsDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpStepsDemoRoutingModule { }
