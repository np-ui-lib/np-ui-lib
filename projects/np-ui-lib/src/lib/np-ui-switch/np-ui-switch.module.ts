import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiSwitchComponent } from './np-ui-switch.component';

@NgModule({
  declarations: [NpUiSwitchComponent],
  imports: [
    CommonModule
  ],
  exports: [NpUiSwitchComponent]
})
export class NpUiSwitchModule { }
