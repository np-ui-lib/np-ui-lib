import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiTooltipComponent } from './np-ui-tooltip.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { NpUiTooltipDirective } from './np-ui-tooltip.directive';

@NgModule({
  declarations: [NpUiTooltipComponent, NpUiTooltipDirective],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    NpUiTooltipComponent, NpUiTooltipDirective
  ]
})
export class NpUiTooltipModule { }
