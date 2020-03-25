import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiNotificationDemoRoutingModule } from './np-ui-notification-demo-routing.module';
import { NpUiNotificationDemoComponent } from './np-ui-notification-demo.component';
import { NpUiNotificationModule } from 'projects/np-ui-lib/src/public-api';


@NgModule({
  declarations: [NpUiNotificationDemoComponent],
  imports: [
    CommonModule,
    NpUiNotificationDemoRoutingModule,
    NpUiNotificationModule
  ]
})
export class NpUiNotificationDemoModule { }
