import { NgModule } from '@angular/core';

import { NpDatePickerDemoRoutingModule } from './np-date-picker-demo-routing.module';
import { NpDatePickerDemoComponent } from './np-date-picker-demo.component';
import { NpDatePickerModule } from 'np-ui-lib';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NpDatePickerDemoComponent],
  imports: [
    NpDatePickerModule,
    NpDatePickerDemoRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class NpDatePickerDemoModule { }
