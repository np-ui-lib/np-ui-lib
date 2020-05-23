import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpGridLayoutDemoRoutingModule } from './np-grid-layout-demo-routing.module';
import { NpGridLayoutDemoComponent } from './np-grid-layout-demo.component';


@NgModule({
  declarations: [NpGridLayoutDemoComponent],
  imports: [
    CommonModule,
    NpGridLayoutDemoRoutingModule
  ]
})
export class NpGridLayoutDemoModule { }
