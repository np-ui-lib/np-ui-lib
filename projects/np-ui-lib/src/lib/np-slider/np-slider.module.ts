import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpSliderComponent } from "./np-slider.component";
import { NpAutofocusModule } from "../np-utility/np-autofocus.module";

@NgModule({
  declarations: [NpSliderComponent],
  imports: [CommonModule, NpAutofocusModule],
  exports: [NpSliderComponent],
})
export class NpSliderModule {}
