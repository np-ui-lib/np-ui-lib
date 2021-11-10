import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpSwitchComponent } from "./np-switch.component";
import { NpTranslationsModule } from "../np-translations/np-translations.module";
import { NpAutofocusModule } from "../np-utility/np-autofocus.module";

@NgModule({
  declarations: [NpSwitchComponent],
  imports: [CommonModule, NpAutofocusModule, NpTranslationsModule],
  exports: [NpSwitchComponent],
})
export class NpSwitchModule {}
