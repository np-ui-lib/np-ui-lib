import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiColorPickerDemoRoutingModule } from './np-ui-color-picker-demo-routing.module';
import { NpUiColorPickerDemoComponent } from './np-ui-color-picker-demo.component';


@NgModule({
  declarations: [NpUiColorPickerDemoComponent],
  imports: [
    CommonModule,
    NpUiColorPickerDemoRoutingModule
  ]
})
export class NpUiColorPickerDemoModule { }
