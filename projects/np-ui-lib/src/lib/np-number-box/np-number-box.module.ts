import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpNumberBoxComponent } from "./np-number-box.component";
import { NpAutofocusModule } from "../np-utility/np-autofocus.module";

@NgModule({
  declarations: [NpNumberBoxComponent],
  imports: [CommonModule, NpAutofocusModule],
  exports: [NpNumberBoxComponent],
})
export class NpNumberBoxModule {}
