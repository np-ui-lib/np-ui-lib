import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiDatePickerDemoRoutingModule } from './np-ui-date-picker-demo-routing.module';
import { NpUiDatePickerDemoComponent } from './np-ui-date-picker-demo.component';
import { FormsModule } from '@angular/forms';
import { NpUiDatePickerModule } from 'projects/np-ui-lib/src/public-api';


@NgModule({
  declarations: [NpUiDatePickerDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUiDatePickerModule,
    NpUiDatePickerDemoRoutingModule
  ]
})
export class NpUiDatePickerDemoModule { }
