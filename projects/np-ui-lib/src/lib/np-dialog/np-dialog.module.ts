import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpDialogContainerComponent } from "./np-dialog-container.component";
import { FormsModule } from "@angular/forms";
import { NpTranslationsModule } from "../np-translations/np-translations.module";
import { NpAutofocusModule } from "../np-utility/np-autofocus.module";
import { NpDialogService } from "./np-dialog.service";
import { PortalModule } from "@angular/cdk/portal";
import { OverlayModule } from "@angular/cdk/overlay";

@NgModule({
  declarations: [NpDialogContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    NpTranslationsModule,
    NpAutofocusModule,
  ],
  exports: [NpDialogContainerComponent],
  entryComponents: [NpDialogContainerComponent],
  providers: [NpDialogService],
})
export class NpDialogModule { }
