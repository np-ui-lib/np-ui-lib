import { NgModule } from "@angular/core";
import { NpTimePickerComponent } from "./np-time-picker.component";
import { CommonModule } from "@angular/common";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { NpTranslationsModule } from "../np-translations/np-translations.module";
import { NpAutofocusModule } from "../np-utility/np-autofocus.module";

@NgModule({
  declarations: [NpTimePickerComponent],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    NpAutofocusModule,
    NpTranslationsModule,
  ],
  exports: [NpTimePickerComponent],
})
export class NpTimePickerModule { }
