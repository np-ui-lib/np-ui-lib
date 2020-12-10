import { NgModule } from '@angular/core';
import { NpTimePickerComponent } from './np-time-picker.component';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NpUtilityModule } from '../np-utility/np-utility.module';
import { NpTranslationsModule } from '../np-translations/np-tranlations.module';

@NgModule({
  declarations: [NpTimePickerComponent],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    NpUtilityModule,
    NpTranslationsModule
  ],
  exports: [NpTimePickerComponent]
})
export class NpTimePickerModule { }
