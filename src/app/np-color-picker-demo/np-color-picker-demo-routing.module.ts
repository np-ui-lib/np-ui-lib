import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpColorPickerDemoComponent } from './np-color-picker-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpColorPickerDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpColorPickerDemoRoutingModule { }
