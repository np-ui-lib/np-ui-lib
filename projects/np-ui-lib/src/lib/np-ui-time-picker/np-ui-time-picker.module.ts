import { NgModule } from '@angular/core';
import { NpUiTimePickerComponent } from './np-ui-time-picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpUiTimePickerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NpUiTimePickerComponent]
})
export class NpUiTimePickerModule { }
