import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiUtilityDemoRoutingModule } from './np-ui-utility-demo-routing.module';
import { NpUiUtilityDemoComponent } from './np-ui-utility-demo.component';
import { NpUiUtility, NpUiHightLightPipe, NpUiDatePickerModule, NpUiTimePickerModule } from 'projects/np-ui-lib/src/public-api';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpUiUtilityDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUiUtilityDemoRoutingModule,
    NpUiUtility,
    NpUiDatePickerModule,
    NpUiTimePickerModule
  ],
  providers: [NpUiHightLightPipe]
})
export class NpUiUtilityDemoModule { }
