import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { NpAutoCompleteComponent } from "./np-auto-complete.component";
import { NpTranslationsModule } from "../np-translations/np-translations.module";
import { NpAutofocusModule } from "../np-utility/np-autofocus.module";
import { NpOrderByModule } from "../np-utility/np-orderby.module";
import { NpHightlightModule } from "../np-utility/np-highlight.module";

@NgModule({
  declarations: [NpAutoCompleteComponent],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    NpAutofocusModule,
    NpOrderByModule,
    NpHightlightModule,
    NpTranslationsModule,
  ],
  exports: [NpAutoCompleteComponent],
})
export class NpAutoCompleteModule {}
