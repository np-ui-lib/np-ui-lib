import { NgModule } from '@angular/core';

import { NpColorPickerDemoRoutingModule } from './np-color-picker-demo-routing.module';
import { NpColorPickerDemoComponent } from './np-color-picker-demo.component';
import { NpColorPickerModule, NpCardModule, NpTabsModule } from 'np-ui-lib';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpColorPickerDemoComponent],
  imports: [
    NpColorPickerModule,
    NpColorPickerDemoRoutingModule,
    CommonModule,
    FormsModule,
    NpCardModule,
    NpTabsModule
  ]
})
export class NpColorPickerDemoModule { }
