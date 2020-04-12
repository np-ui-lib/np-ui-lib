import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiModalDemoComponent } from './np-ui-modal-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NpUiModalDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiModalDemoRoutingModule { }
