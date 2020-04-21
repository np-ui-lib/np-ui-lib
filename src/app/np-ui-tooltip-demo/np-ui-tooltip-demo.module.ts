import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiTooltipDemoRoutingModule } from './np-ui-tooltip-demo-routing.module';
import { NpUiTooltipDemoComponent } from './np-ui-tooltip-demo.component';
import { NpUiTooltipModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpUiTooltipDemoComponent],
  imports: [
    CommonModule,
    NpUiTooltipDemoRoutingModule,
    NpUiTooltipModule
  ]
})
export class NpUiTooltipDemoModule { }
