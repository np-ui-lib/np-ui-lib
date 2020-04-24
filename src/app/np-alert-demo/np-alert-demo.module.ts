import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpAlertDemoRoutingModule } from './np-alert-demo-routing.module';
import { NpAlertDemoComponent } from './np-alert-demo.component';
import { NpAlertModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpAlertDemoComponent],
  imports: [
    CommonModule,
    NpAlertDemoRoutingModule,
    NpAlertModule
  ]
})
export class NpAlertDemoModule { }
