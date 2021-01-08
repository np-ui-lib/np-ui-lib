import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpTooltipComponent } from './np-tooltip.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { NpTooltipDirective } from './np-tooltip.directive';
import { NpUtilityModule } from '../np-utility/np-utility.module';

@NgModule({
  declarations: [NpTooltipComponent, NpTooltipDirective],
  imports: [
    CommonModule,
    OverlayModule,
    NpUtilityModule
  ],
  exports: [NpTooltipDirective],
  entryComponents: [NpTooltipComponent]
})
export class NpTooltipModule { }
