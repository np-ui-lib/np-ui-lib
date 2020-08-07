import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NpAutoCompleteComponent } from './np-auto-complete.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';
import { NpHightLightPipe } from '../np-utility/np-highlight.pipe';

@NgModule({
  declarations: [NpAutoCompleteComponent],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    NpUtilityModule
  ],
  exports: [NpAutoCompleteComponent]
})
export class NpAutoCompleteModule { }
