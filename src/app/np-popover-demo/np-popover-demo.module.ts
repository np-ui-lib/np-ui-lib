import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpPopoverDemoRoutingModule } from './np-popover-demo-routing.module';
import { NpPopoverDemoComponent } from './np-popover-demo.component';
import { NpPopoverModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpPopoverDemoComponent],
  imports: [
    CommonModule,
    NpPopoverDemoRoutingModule,
    NpPopoverModule
  ]
})
export class NpPopoverDemoModule { }
