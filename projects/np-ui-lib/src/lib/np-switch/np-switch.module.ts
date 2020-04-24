import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpSwitchComponent } from './np-switch.component';

@NgModule({
  declarations: [NpSwitchComponent],
  imports: [
    CommonModule
  ],
  exports: [NpSwitchComponent]
})
export class NpSwitchModule { }
