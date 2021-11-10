import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpDatePickerComponent } from "./np-date-picker.component";
import { NpTooltipModule } from "../np-tooltip/np-tooltip.module";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { NpTranslationsModule } from "../np-translations/np-translations.module";
import { NpAutofocusModule } from "../np-utility/np-autofocus.module";

@NgModule({
  declarations: [NpDatePickerComponent],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    NpTooltipModule,
    NpAutofocusModule,
    NpTranslationsModule,
  ],
  exports: [NpDatePickerComponent],
})
export class NpDatePickerModule {}
