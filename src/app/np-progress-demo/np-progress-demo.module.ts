import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpProgressDemoRoutingModule } from "./np-progress-demo-routing.module";
import { NpProgressDemoComponent } from "./np-progress-demo.component";
import { NpProgressModule, NpCardModule, NpTabsModule } from "np-ui-lib";

@NgModule({
  declarations: [NpProgressDemoComponent],
  imports: [
    CommonModule,
    NpProgressDemoRoutingModule,
    NpProgressModule,
    NpCardModule,
    NpTabsModule,
  ],
})
export class NpProgressDemoModule {}
