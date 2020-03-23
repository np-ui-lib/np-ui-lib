import { NgModule } from '@angular/core';

import { NpUiColorPickerDemoRoutingModule } from './np-ui-color-picker-demo-routing.module';
import { NpUiColorPickerDemoComponent } from './np-ui-color-picker-demo.component';
import { NpUiColorPickerModule } from 'projects/np-ui-lib/src/public-api';
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
