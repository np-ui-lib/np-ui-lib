import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpCheckboxDemoRoutingModule } from "./np-checkbox-demo-routing.module";
import { NpCheckboxDemoComponent } from "./np-checkbox-demo.component";
import { NpCardModule, NpCheckboxModule, NpTabsModule } from "np-ui-lib";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [NpCheckboxDemoComponent],
  imports: [
    CommonModule,
    NpCheckboxDemoRoutingModule,
    NpCheckboxModule,
    NpCardModule,
    NpTabsModule,
    FormsModule,
  ],
})
export class NpCheckboxDemoModule {}
