import { NgModule } from '@angular/core';
import { NpColorPickerComponent } from './np-color-picker.component';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NpTranslationsModule } from '../np-translations/np-tranlations.module';
import { NpAutofocusModule } from '../np-utility/np-autofocus.module';

@NgModule({
    declarations: [NpColorPickerComponent],
    imports: [
        CommonModule,
        OverlayModule,
        PortalModule,
        NpAutofocusModule,
        NpTranslationsModule
    ],
    exports: [NpColorPickerComponent]
})
export class NpColorPickerModule { }
