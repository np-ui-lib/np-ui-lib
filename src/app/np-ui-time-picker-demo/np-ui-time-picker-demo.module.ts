import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiTimePickerDemoRoutingModule } from './np-ui-time-picker-demo-routing.module';
import { NpUiTimePickerDemoComponent } from './np-ui-time-picker-demo.component';
import { FormsModule } from '@angular/forms';
import { NpUiTimePickerModule } from 'projects/np-ui-lib/src/public-api';


@NgModule({
  declarations: [NpUiTimePickerDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUiTimePickerModule,
    NpUiTimePickerDemoRoutingModule
  ]
})
export class NpUiTimePickerDemoModule { }
