import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpSwitchDemoRoutingModule } from "./np-switch-demo-routing.module";
import { NpSwitchDemoComponent } from "./np-switch-demo.component";
import { NpSwitchModule, NpCardModule, NpTabsModule } from "np-ui-lib";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [NpSwitchDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpSwitchDemoRoutingModule,
    NpSwitchModule,
    NpCardModule,
    NpTabsModule,
  ],
})
export class NpSwitchDemoModule {}
