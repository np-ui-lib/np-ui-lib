import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpUiDatePickerComponent } from "./np-ui-date-picker.component";
import { FormsModule } from "@angular/forms";
import { NpUiTooltipModule } from "../np-ui-tooltip/np-ui-tooltip.module";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";

@NgModule({
  declarations: [NpUiDatePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    NpUiTooltipModule
  ],
  exports: [NpUiDatePickerComponent]
})
export class NpUiDatePickerModule { }
