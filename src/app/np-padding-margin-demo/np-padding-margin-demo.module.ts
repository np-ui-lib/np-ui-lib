import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpPaddingMarginDemoRoutingModule } from './np-padding-margin-demo-routing.module';
import { NpPaddingMarginDemoComponent } from './np-padding-margin-demo.component';
import { NpCardModule } from 'np-ui-lib';


@NgModule({
  declarations: [
    NpPaddingMarginDemoComponent
  ],
  imports: [
    CommonModule,
    NpPaddingMarginDemoRoutingModule,
    NpCardModule
  ]
})
export class NpPaddingMarginDemoModule { }
