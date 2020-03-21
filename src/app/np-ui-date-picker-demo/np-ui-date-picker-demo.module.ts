import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiDatePickerDemoRoutingModule } from './np-ui-date-picker-demo-routing.module';
import { NpUiDatePickerDemoComponent } from './np-ui-date-picker-demo.component';


@NgModule({
  declarations: [NpUiDatePickerDemoComponent],
  imports: [
    CommonModule,
    NpUiDatePickerDemoRoutingModule
  ]
})
export class NpUiDatePickerDemoModule { }
