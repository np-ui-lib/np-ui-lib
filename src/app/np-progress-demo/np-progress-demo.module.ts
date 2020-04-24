import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpProgressDemoRoutingModule } from './np-progress-demo-routing.module';
import { NpProgressDemoComponent } from './np-progress-demo.component';
import { NpProgressModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpProgressDemoComponent],
  imports: [
    CommonModule,
    NpProgressDemoRoutingModule,
    NpProgressModule
  ]
})
export class NpProgressDemoModule { }
