import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpRadioButtonComponent } from "./np-radio-button.component";
import { NpRadioGroupComponent } from "./np-radio-group.component";

@NgModule({
  declarations: [NpRadioButtonComponent, NpRadioGroupComponent],
  imports: [CommonModule],
  exports: [NpRadioButtonComponent, NpRadioGroupComponent],
})
export class NpRadioButtonModule {}
