import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpTooltipDemoRoutingModule } from './np-tooltip-demo-routing.module';
import { NpTooltipDemoComponent } from './np-tooltip-demo.component';
import { NpTooltipModule, NpDatePickerModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpTooltipDemoComponent],
  imports: [
    CommonModule,
    NpTooltipDemoRoutingModule,
    NpTooltipModule,
    NpDatePickerModule
  ]
})
export class NpTooltipDemoModule { }
