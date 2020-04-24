import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUtilityDemoRoutingModule } from './np-utility-demo-routing.module';
import { NpUtilityDemoComponent } from './np-utility-demo.component';
import { NpUtility, NpHightLightPipe, NpDatePickerModule, NpTimePickerModule, NpSwitchModule } from 'np-ui-lib';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpUtilityDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUtilityDemoRoutingModule,
    NpUtility,
    NpDatePickerModule,
    NpTimePickerModule,
    NpSwitchModule
  ],
  providers: [NpHightLightPipe]
})
export class NpUtilityDemoModule { }
