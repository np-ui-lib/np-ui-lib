import { NgModule } from '@angular/core';
import { NpColorPickerComponent } from './np-color-picker.component';
import { CommonModule } from '@angular/common';
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";

@NgModule({
    declarations: [NpColorPickerComponent],
    imports: [
        CommonModule,
        OverlayModule,
        PortalModule
    ],
    exports: [NpColorPickerComponent]
})
export class NpColorPickerModule { }