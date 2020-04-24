import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpModalDemoRoutingModule } from './np-modal-demo-routing.module';
import { NpModalDemoComponent } from './np-modal-demo.component';
import { NpModalModule, NpDatePickerModule, NpTimePickerModule, NpSwitchModule } from 'np-ui-lib';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NpModalDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpModalDemoRoutingModule,
    NpModalModule,
    NpDatePickerModule,
    NpTimePickerModule,
    NpSwitchModule
  ]
})
export class NpModalDemoModule { }
