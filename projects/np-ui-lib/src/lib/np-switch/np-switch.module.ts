import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpSwitchComponent } from './np-switch.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';
import { NpTranslationsModule } from '../np-translations/np-tranlations.module';

@NgModule({
  declarations: [NpSwitchComponent],
  imports: [
    CommonModule,
    NpUtilityModule,
    NpTranslationsModule
  ],
  exports: [NpSwitchComponent]
})
export class NpSwitchModule { }
