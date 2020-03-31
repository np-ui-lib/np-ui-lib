import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiProgressComponent } from './np-ui-progress.component';
import { NpUiTooltipModule } from '../np-ui-tooltip/np-ui-tooltip.module';

@NgModule({
  declarations: [NpUiProgressComponent],
  imports: [
    CommonModule,
    NpUiTooltipModule
  ],
  exports: [NpUiProgressComponent]
})
export class NpUiProgressModule { }
