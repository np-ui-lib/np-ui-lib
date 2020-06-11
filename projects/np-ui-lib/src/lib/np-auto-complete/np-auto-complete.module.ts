import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpAutoCompleteComponent } from './np-auto-complete.component';
import { FormsModule } from '@angular/forms';
import { NpUtilityModule } from '../np-utility/np-utility.module';
import { NpHightLightPipe } from '../np-utility/np-highlight.pipe';
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";

@NgModule({
  declarations: [NpAutoCompleteComponent],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    NpUtilityModule
  ],
  providers: [NpHightLightPipe],
  exports: [NpAutoCompleteComponent]
})
export class NpAutoCompleteModule { }
