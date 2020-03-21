import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiDatePickerComponent } from './np-ui-date-picker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpUiDatePickerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NpUiDatePickerComponent]
})
export class NpUiDatePickerModule { }
