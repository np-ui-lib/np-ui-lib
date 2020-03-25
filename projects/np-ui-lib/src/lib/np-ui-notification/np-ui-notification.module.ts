import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiNotificationComponent } from './np-ui-notification.component';

@NgModule({
  declarations: [NpUiNotificationComponent],
  imports: [
    CommonModule
  ],
  exports: [NpUiNotificationComponent]
})
export class NpUiNotificationModule { }
