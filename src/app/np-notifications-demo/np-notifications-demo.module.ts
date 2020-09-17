import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpNotificationsDemoRoutingModule } from './np-notifications-demo-routing.module';
import { NpNotificationsDemoComponent } from './np-notifications-demo.component';
import { NpTabsModule, NpCardModule, NpAlertModule } from 'np-ui-lib';


@NgModule({
  declarations: [NpNotificationsDemoComponent],
  imports: [
    CommonModule,
    NpNotificationsDemoRoutingModule,
    NpTabsModule,
    NpCardModule,
    NpAlertModule
  ]
})
export class NpNotificationsDemoModule { }
