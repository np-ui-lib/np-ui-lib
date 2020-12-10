import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NpAutoCompleteComponent } from './np-auto-complete.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';
import { NpTranslationsModule } from '../np-translations/np-tranlations.module';

@NgModule({
  declarations: [NpAutoCompleteComponent],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    NpUtilityModule,
    NpTranslationsModule
  ],
  exports: [NpAutoCompleteComponent]
})
export class NpAutoCompleteModule { }
