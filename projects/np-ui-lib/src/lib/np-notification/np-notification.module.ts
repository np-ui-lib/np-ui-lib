import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpNotificationComponent } from './np-notification.component';

@NgModule({
  declarations: [NpNotificationComponent],
  imports: [
    CommonModule
  ],
  exports: [NpNotificationComponent]
})
export class NpNotificationModule { }
