import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpTimelineComponent } from './np-timeline.component';

@NgModule({
  declarations: [NpTimelineComponent],
  imports: [
    CommonModule
  ],
  exports: [NpTimelineComponent]
})
export class NpTimelineModule { }
