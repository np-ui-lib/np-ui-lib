import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpInputTextComponent } from "./np-input-text.component";
import { NpAutofocusModule } from "../np-utility/np-autofocus.module";

@NgModule({
  declarations: [NpInputTextComponent],
  imports: [CommonModule, NpAutofocusModule],
  exports: [NpInputTextComponent],
})
export class NpInputTextModule {}
