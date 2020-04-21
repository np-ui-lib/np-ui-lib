import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiProgressDemoRoutingModule } from './np-ui-progress-demo-routing.module';
import { NpUiProgressDemoComponent } from './np-ui-progress-demo.component';
import { NpUiProgressModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpUiProgressDemoComponent],
  imports: [
    CommonModule,
    NpUiProgressDemoRoutingModule,
    NpUiProgressModule
  ]
})
export class NpUiProgressDemoModule { }
