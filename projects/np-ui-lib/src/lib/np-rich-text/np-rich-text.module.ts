import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpRichTextComponent } from "./np-rich-text.component";
import { FormsModule } from "@angular/forms";
import { NpColorPickerModule } from "../np-color-picker/np-color-picker.module";
import { NpPopoverModule } from "../np-popover/np-popover.module";
import { NpTranslationsModule } from "../np-translations/np-translations.module";
import { NpAutofocusModule } from "../np-utility/np-autofocus.module";

@NgModule({
  declarations: [NpRichTextComponent],
  imports: [
    CommonModule,
    NpAutofocusModule,
    FormsModule,
    NpColorPickerModule,
    NpPopoverModule,
    NpTranslationsModule,
  ],
  exports: [NpRichTextComponent],
})
export class NpRichTextModule {}
