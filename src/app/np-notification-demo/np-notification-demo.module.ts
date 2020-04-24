import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpNotificationDemoRoutingModule } from './np-notification-demo-routing.module';
import { NpNotificationDemoComponent } from './np-notification-demo.component';
import { NpNotificationModule } from 'np-ui-lib';


@NgModule({
  declarations: [NpNotificationDemoComponent],
  imports: [
    CommonModule,
    NpNotificationDemoRoutingModule,
    NpNotificationModule
  ]
})
export class NpNotificationDemoModule { }
