import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiPopoverDemoRoutingModule } from './np-ui-popover-demo-routing.module';
import { NpUiPopoverDemoComponent } from './np-ui-popover-demo.component';
import { NpUiPopoverModule } from 'projects/np-ui-lib/src/public-api';

@NgModule({
  declarations: [NpUiPopoverDemoComponent],
  imports: [
    CommonModule,
    NpUiPopoverDemoRoutingModule,
    NpUiPopoverModule
  ]
})
export class NpUiPopoverDemoModule { }
