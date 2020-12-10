import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpDatePickerComponent } from './np-date-picker.component';
import { NpTooltipModule } from '../np-tooltip/np-tooltip.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NpUtilityModule } from '../np-utility/np-utility.module';
import { NpTranslationsModule } from '../np-translations/np-tranlations.module';

@NgModule({
  declarations: [NpDatePickerComponent],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    NpTooltipModule,
    NpUtilityModule,
    NpTranslationsModule
  ],
  exports: [NpDatePickerComponent]
})
export class NpDatePickerModule { }
