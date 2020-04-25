import { NgModule } from '@angular/core';
import { NpTimePickerComponent } from './np-time-picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";

@NgModule({
  declarations: [NpTimePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule
  ],
  exports: [NpTimePickerComponent]
})
export class NpTimePickerModule { }