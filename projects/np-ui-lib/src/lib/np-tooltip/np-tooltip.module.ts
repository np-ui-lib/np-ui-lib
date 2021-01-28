import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpTooltipComponent } from './np-tooltip.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { NpTooltipDirective } from './np-tooltip.directive';

@NgModule({
  declarations: [NpTooltipComponent, NpTooltipDirective],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [NpTooltipDirective],
  entryComponents: [NpTooltipComponent]
})
export class NpTooltipModule { }
