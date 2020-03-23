import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpUiColorPickerDemoComponent } from './np-ui-color-picker-demo.component';


const routes: Routes = [
  {
    path: '',
    component: NpUiColorPickerDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpUiColorPickerDemoRoutingModule { }
