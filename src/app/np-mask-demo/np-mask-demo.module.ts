import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpMaskDemoRoutingModule } from './np-mask-demo-routing.module';
import { NpMaskDemoComponent } from './np-mask-demo.component';
import { NpMaskModule, NpDropdownModule, NpCardModule, NpTabsModule } from 'np-ui-lib';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NpMaskDemoComponent],
  imports: [
    CommonModule,
    NpMaskDemoRoutingModule,
    NpMaskModule,
    NpDropdownModule,
    FormsModule,
    NpCardModule,
    NpTabsModule
  ]
})
export class NpMaskDemoModule { }
