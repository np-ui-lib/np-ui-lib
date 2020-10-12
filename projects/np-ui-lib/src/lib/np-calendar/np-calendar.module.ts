import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpCalendarComponent } from './np-calendar.component';

@NgModule({
  declarations: [NpCalendarComponent],
  imports: [
    CommonModule
  ],
  exports: [NpCalendarComponent]
})
export class NpCalendarModule { }
