import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiAlertDemoRoutingModule } from './np-ui-alert-demo-routing.module';
import { NpUiAlertDemoComponent } from './np-ui-alert-demo.component';
import { NpUiAlertModule } from 'projects/np-ui-lib/src/public-api';

@NgModule({
  declarations: [NpUiAlertDemoComponent],
  imports: [
    CommonModule,
    NpUiAlertDemoRoutingModule,
    NpUiAlertModule
  ]
})
export class NpUiAlertDemoModule { }
