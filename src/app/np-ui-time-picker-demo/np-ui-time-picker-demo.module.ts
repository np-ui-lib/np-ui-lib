import { NgModule } from '@angular/core';

import { NpUiTimePickerDemoRoutingModule } from './np-ui-time-picker-demo-routing.module';
import { NpUiTimePickerDemoComponent } from './np-ui-time-picker-demo.component';
import { NpUiTimePickerModule } from 'np-ui-lib';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NpUiTimePickerDemoComponent],
  imports: [
    NpUiTimePickerModule,
    NpUiTimePickerDemoRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class NpUiTimePickerDemoModule { }
