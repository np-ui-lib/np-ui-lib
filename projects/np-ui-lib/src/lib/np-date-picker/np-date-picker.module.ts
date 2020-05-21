import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpDatePickerComponent } from "./np-date-picker.component";
import { FormsModule } from "@angular/forms";
import { NpTooltipModule } from "../np-tooltip/np-tooltip.module";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { NpNumberBoxModule } from '../np-number-box/np-number-box.module';

@NgModule({
  declarations: [NpDatePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    NpTooltipModule,
    NpNumberBoxModule
  ],
  exports: [NpDatePickerComponent]
})
export class NpDatePickerModule { }
