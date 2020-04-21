import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiUtilityDemoRoutingModule } from './np-ui-utility-demo-routing.module';
import { NpUiUtilityDemoComponent } from './np-ui-utility-demo.component';
import { NpUiUtility, NpUiHightLightPipe, NpUiDatePickerModule, NpUiTimePickerModule, NpUiSwitchModule } from 'np-ui-lib';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpUiUtilityDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUiUtilityDemoRoutingModule,
    NpUiUtility,
    NpUiDatePickerModule,
    NpUiTimePickerModule,
    NpUiSwitchModule
  ],
  providers: [NpUiHightLightPipe]
})
export class NpUiUtilityDemoModule { }
