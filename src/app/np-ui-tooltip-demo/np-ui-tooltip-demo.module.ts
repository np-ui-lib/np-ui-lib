import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiTooltipDemoRoutingModule } from './np-ui-tooltip-demo-routing.module';
import { NpUiTooltipDemoComponent } from './np-ui-tooltip-demo.component';
import { NpUiTooltipModule } from 'projects/np-ui-lib/src/public-api';

@NgModule({
  declarations: [NpUiTooltipDemoComponent],
  imports: [
    CommonModule,
    NpUiTooltipDemoRoutingModule,
    NpUiTooltipModule
  ]
})
export class NpUiTooltipDemoModule { }
