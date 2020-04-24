import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpTimePickerDemoComponent } from './np-time-picker-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpTimePickerDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpTimePickerDemoRoutingModule { }
