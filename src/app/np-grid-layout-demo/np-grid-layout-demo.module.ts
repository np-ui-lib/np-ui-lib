import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpGridLayoutDemoRoutingModule } from './np-grid-layout-demo-routing.module';
import { NpGridLayoutDemoComponent } from './np-grid-layout-demo.component';
import { NpCardComponent, NpCardModule } from 'np-ui-lib';


@NgModule({
  declarations: [NpGridLayoutDemoComponent],
  imports: [
    CommonModule,
    NpGridLayoutDemoRoutingModule,
    NpCardModule
  ]
})
export class NpGridLayoutDemoModule { }
