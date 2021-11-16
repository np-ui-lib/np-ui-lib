import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpTagsComponent } from "./np-tags.component";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { NpTranslationsModule } from "../np-translations/np-translations.module";
import { NpAutofocusModule } from "../np-utility/np-autofocus.module";
import { NpOrderByModule } from "../np-utility/np-orderby.module";
import { NpHighlightModule } from "../np-utility/np-highlight.module";

@NgModule({
  declarations: [NpTagsComponent],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    NpAutofocusModule,
    NpTranslationsModule,
    NpOrderByModule,
    NpHighlightModule,
  ],
  exports: [NpTagsComponent],
})
export class NpTagsModule {}
