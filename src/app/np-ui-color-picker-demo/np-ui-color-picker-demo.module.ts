import { NgModule } from '@angular/core';

import { NpUiColorPickerDemoRoutingModule } from './np-ui-color-picker-demo-routing.module';
import { NpUiColorPickerDemoComponent } from './np-ui-color-picker-demo.component';
import { NpUiColorPickerModule } from 'np-ui-lib';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpUiColorPickerDemoComponent],
  imports: [
    NpUiColorPickerModule,
    NpUiColorPickerDemoRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class NpUiColorPickerDemoModule { }
