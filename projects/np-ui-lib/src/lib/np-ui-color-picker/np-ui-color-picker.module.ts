import { NgModule } from '@angular/core';
import { NpUiColorPickerComponent } from './np-ui-color-picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";

@NgModule({
    declarations: [NpUiColorPickerComponent],
    imports: [
        CommonModule,
        FormsModule,
        OverlayModule,
        PortalModule
    ],
    exports: [NpUiColorPickerComponent]
})
export class NpUiColorPickerModule { }