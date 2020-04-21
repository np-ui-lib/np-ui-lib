import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiNotificationDemoRoutingModule } from './np-ui-notification-demo-routing.module';
import { NpUiNotificationDemoComponent } from './np-ui-notification-demo.component';
import { NpUiNotificationModule } from 'np-ui-lib';


@NgModule({
  declarations: [NpUiNotificationDemoComponent],
  imports: [
    CommonModule,
    NpUiNotificationDemoRoutingModule,
    NpUiNotificationModule
  ]
})
export class NpUiNotificationDemoModule { }
