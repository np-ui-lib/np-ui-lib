import { NgModule } from '@angular/core';
import { NpUiTimePickerComponent } from './np-ui-time-picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";

@NgModule({
  declarations: [NpUiTimePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule
  ],
  exports: [NpUiTimePickerComponent]
})
export class NpUiTimePickerModule { }
