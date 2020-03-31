import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiProgressDemoComponent } from './np-ui-progress-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpUiProgressDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiProgressDemoRoutingModule { }
