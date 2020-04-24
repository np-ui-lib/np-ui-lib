import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpDatePickerComponent } from "./np-date-picker.component";
import { FormsModule } from "@angular/forms";
import { NpTooltipModule } from "../np-tooltip/np-tooltip.module";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";

@NgModule({
  declarations: [NpDatePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    NpTooltipModule
  ],
  exports: [NpDatePickerComponent]
})
export class NpDatePickerModule { }
