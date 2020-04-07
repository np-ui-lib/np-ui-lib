import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiTabsDemoComponent } from './np-ui-tabs-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpUiTabsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiTabsDemoRoutingModule { }
