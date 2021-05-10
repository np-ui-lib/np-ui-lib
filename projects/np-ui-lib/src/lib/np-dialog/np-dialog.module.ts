import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpDialogComponent } from "./np-dialog.component";
import { FormsModule } from "@angular/forms";
import { NpTranslationsModule } from "../np-translations/np-tranlations.module";
import { NpAutofocusModule } from "../np-utility/np-autofocus.module";
import { NpDialogService } from "./np-dialog.service";

@NgModule({
  declarations: [NpDialogComponent],
  imports: [CommonModule, FormsModule, NpTranslationsModule, NpAutofocusModule],
  exports: [NpDialogComponent],
  entryComponents: [NpDialogComponent],
  providers: [NpDialogService],
})
export class NpDialogModule {}
