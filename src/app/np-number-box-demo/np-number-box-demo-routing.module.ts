import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpNumberBoxDemoComponent } from './np-number-box-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NpNumberBoxDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpNumberBoxDemoRoutingModule { }
