import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiTimePickerDemoComponent } from './np-ui-time-picker-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpUiTimePickerDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiTimePickerDemoRoutingModule { }
