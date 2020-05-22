import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpSliderDemoRoutingModule } from './np-slider-demo-routing.module';
import { NpSliderDemoComponent } from './np-slider-demo.component';
import { NpSliderModule } from 'np-ui-lib';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpSliderDemoComponent],
  imports: [
    CommonModule,
    NpSliderDemoRoutingModule,
    NpSliderModule,
    FormsModule
  ]
})
export class NpSliderDemoModule { }
