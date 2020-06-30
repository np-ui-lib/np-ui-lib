import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpVirtualScrollDemoRoutingModule } from './np-virtual-scroll-demo-routing.module';
import { NpVirtualScrollDemoComponent } from './np-virtual-scroll-demo.component';
import { NpVirtualScrollModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpVirtualScrollDemoComponent],
  imports: [
    CommonModule,
    NpVirtualScrollDemoRoutingModule,
    NpVirtualScrollModule
  ]
})
export class NpVirtualScrollDemoModule { }
