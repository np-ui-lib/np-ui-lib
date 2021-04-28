import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpPopoverDemoRoutingModule } from "./np-popover-demo-routing.module";
import { NpPopoverDemoComponent } from "./np-popover-demo.component";
import { NpPopoverModule, NpCardModule, NpTabsModule } from "np-ui-lib";

@NgModule({
  declarations: [NpPopoverDemoComponent],
  imports: [
    CommonModule,
    NpPopoverDemoRoutingModule,
    NpPopoverModule,
    NpCardModule,
    NpTabsModule,
  ],
})
export class NpPopoverDemoModule {}
