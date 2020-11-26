import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpRadioButtonDemoComponent } from './np-radio-button-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NpRadioButtonDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpRadioButtonDemoRoutingModule { }
