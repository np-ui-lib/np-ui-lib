import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpSwitchComponent } from './np-switch.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';

@NgModule({
  declarations: [NpSwitchComponent],
  imports: [
    CommonModule,
    NpUtilityModule
  ],
  exports: [NpSwitchComponent]
})
export class NpSwitchModule { }
