import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpCalendarDemoRoutingModule } from "./np-calendar-demo-routing.module";
import { NpCalendarDemoComponent } from "./np-calendar-demo.component";
import {
  NpCalendarModule,
  NpCardModule,
  NpDialogModule,
  NpPopoverModule,
  NpTabsModule,
} from "np-ui-lib";

@NgModule({
  declarations: [NpCalendarDemoComponent],
  imports: [
    CommonModule,
    NpCalendarDemoRoutingModule,
    NpCalendarModule,
    NpDialogModule,
    NpTabsModule,
    NpCardModule,
    NpPopoverModule,
  ],
})
export class NpCalendarDemoModule {}
