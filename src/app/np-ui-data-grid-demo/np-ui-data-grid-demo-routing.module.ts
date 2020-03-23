import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiDataGridDemoComponent } from './np-ui-data-grid-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpUiDataGridDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiDataGridDemoRoutingModule { }
