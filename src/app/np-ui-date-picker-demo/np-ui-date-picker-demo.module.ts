import { NgModule } from '@angular/core';

import { NpUiDatePickerDemoRoutingModule } from './np-ui-date-picker-demo-routing.module';
import { NpUiDatePickerDemoComponent } from './np-ui-date-picker-demo.component';
import { NpUiDatePickerModule } from 'np-ui-lib';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NpUiDatePickerDemoComponent],
  imports: [
    NpUiDatePickerModule,
    NpUiDatePickerDemoRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class NpUiDatePickerDemoModule { }
