import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiDatePickerComponent } from './np-ui-date-picker.component';
import { FormsModule } from '@angular/forms';
import { NpUiTooltipModule } from '../np-ui-tooltip/np-ui-tooltip.module';

@NgModule({
  declarations: [NpUiDatePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUiTooltipModule
  ],
  exports: [NpUiDatePickerComponent]
})
export class NpUiDatePickerModule { }
