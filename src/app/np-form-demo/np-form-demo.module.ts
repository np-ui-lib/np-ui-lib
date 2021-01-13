import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpFormDemoRoutingModule } from './np-form-demo-routing.module';
import { NpFormDemoComponent } from './np-form-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NpCardModule, NpDatePickerModule, NpFileUploadModule, NpInputTextModule,
  NpSwitchModule, NpTextareaModule, NpTimePickerModule, NpUtilityModule
} from 'np-ui-lib';

@NgModule({
  declarations: [NpFormDemoComponent],
  imports: [
    CommonModule,
    NpFormDemoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NpDatePickerModule,
    NpTimePickerModule,
    NpInputTextModule,
    NpSwitchModule,
    NpFileUploadModule,
    NpTextareaModule,
    NpCardModule,
    NpUtilityModule
  ]
})
export class NpFormDemoModule { }
