import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpRadioButtonComponent } from './np-radio-button.component';
import { NpRadioGroupComponent } from './np-radio-group.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';

@NgModule({
  declarations: [NpRadioButtonComponent, NpRadioGroupComponent],
  imports: [
    CommonModule,
    NpUtilityModule
  ],
  exports: [NpRadioButtonComponent, NpRadioGroupComponent]
})
export class NpRadioButtonModule { }
