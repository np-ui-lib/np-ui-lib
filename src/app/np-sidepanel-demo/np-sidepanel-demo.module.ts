import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpSidepanelDemoRoutingModule } from './np-sidepanel-demo-routing.module';
import { NpSidepanelDemoComponent } from './np-sidepanel-demo.component';
import { NpDatePickerModule, NpTimePickerModule, NpSwitchModule, NpSidepanelModule } from 'np-ui-lib';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpSidepanelDemoComponent],
  imports: [
    CommonModule,
    NpSidepanelDemoRoutingModule,
    NpSidepanelModule,
    NpDatePickerModule,
    NpTimePickerModule,
    NpSwitchModule,
    ReactiveFormsModule
  ]
})
export class NpSidepanelDemoModule { }
