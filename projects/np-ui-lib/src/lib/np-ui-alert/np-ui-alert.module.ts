import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiAlertComponent } from './np-ui-alert.component';

@NgModule({
  declarations: [NpUiAlertComponent],
  imports: [
    CommonModule
  ],
  exports: [NpUiAlertComponent]
})
export class NpUiAlertModule { }
