import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpMaskDemoRoutingModule } from './np-mask-demo-routing.module';
import { NpMaskDemoComponent } from './np-mask-demo.component';
import { NpUtilityModule, NpDropdownModule, NpCardModule, NpTabsModule } from 'np-ui-lib';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NpMaskDemoComponent],
  imports: [
    CommonModule,
    NpMaskDemoRoutingModule,
    NpUtilityModule,
    NpDropdownModule,
    FormsModule,
    NpCardModule,
    NpTabsModule
  ]
})
export class NpMaskDemoModule { }
