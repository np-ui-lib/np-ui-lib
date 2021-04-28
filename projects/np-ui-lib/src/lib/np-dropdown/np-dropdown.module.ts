import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpDropdownComponent } from "./np-dropdown.component";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { NpAutofocusModule } from "../np-utility/np-autofocus.module";
import { NpOrderByModule } from "../np-utility/np-orderby.module";

@NgModule({
  declarations: [NpDropdownComponent],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    NpAutofocusModule,
    NpOrderByModule,
  ],
  exports: [NpDropdownComponent],
})
export class NpDropdownModule {}
