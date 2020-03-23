import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiDatePickerDemoComponent } from './np-ui-date-picker-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpUiDatePickerDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiDatePickerDemoRoutingModule { }
