import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpNotificationDemoRoutingModule } from './np-notification-demo-routing.module';
import { NpNotificationDemoComponent } from './np-notification-demo.component';
import { NpTabsModule, NpCardModule } from 'np-ui-lib';


@NgModule({
  declarations: [NpNotificationDemoComponent],
  imports: [
    CommonModule,
    NpNotificationDemoRoutingModule,
    NpTabsModule,
    NpCardModule
  ]
})
export class NpNotificationDemoModule { }
