import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiColorPickerDemoRoutingModule } from './np-ui-color-picker-demo-routing.module';
import { NpUiColorPickerDemoComponent } from './np-ui-color-picker-demo.component';
import { FormsModule } from '@angular/forms';
import { NpUiColorPickerModule } from 'projects/np-ui-lib/src/public-api';


@NgModule({
  declarations: [NpUiColorPickerDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUiColorPickerModule,
    NpUiColorPickerDemoRoutingModule
  ]
})
export class NpUiColorPickerDemoModule { }
