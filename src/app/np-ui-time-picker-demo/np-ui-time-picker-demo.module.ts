import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiTimePickerDemoRoutingModule } from './np-ui-time-picker-demo-routing.module';
import { NpUiTimePickerDemoComponent } from './np-ui-time-picker-demo.component';


@NgModule({
  declarations: [NpUiTimePickerDemoComponent],
  imports: [
    CommonModule,
    NpUiTimePickerDemoRoutingModule
  ]
})
export class NpUiTimePickerDemoModule { }
