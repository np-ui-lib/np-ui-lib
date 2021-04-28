import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpTimelineDemoRoutingModule } from "./np-timeline-demo-routing.module";
import { NpTimelineDemoComponent } from "./np-timeline-demo.component";
import { NpCardModule, NpTabsModule, NpTimelineModule } from "np-ui-lib";

@NgModule({
  declarations: [NpTimelineDemoComponent],
  imports: [
    CommonModule,
    NpTimelineDemoRoutingModule,
    NpTimelineModule,
    NpTabsModule,
    NpCardModule,
  ],
})
export class NpTimelineDemoModule {}
