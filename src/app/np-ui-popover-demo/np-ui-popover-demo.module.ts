import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiPopoverDemoRoutingModule } from './np-ui-popover-demo-routing.module';
import { NpUiPopoverDemoComponent } from './np-ui-popover-demo.component';
import { NpUiPopoverModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpUiPopoverDemoComponent],
  imports: [
    CommonModule,
    NpUiPopoverDemoRoutingModule,
    NpUiPopoverModule
  ]
})
export class NpUiPopoverDemoModule { }
