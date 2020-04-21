import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiModalDemoRoutingModule } from './np-ui-modal-demo-routing.module';
import { NpUiModalDemoComponent } from './np-ui-modal-demo.component';
import { NpUiModalModule, NpUiDatePickerModule, NpUiTimePickerModule, NpUiSwitchModule } from 'np-ui-lib';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NpUiModalDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUiModalDemoRoutingModule,
    NpUiModalModule,
    NpUiDatePickerModule,
    NpUiTimePickerModule,
    NpUiSwitchModule
  ]
})
export class NpUiModalDemoModule { }
