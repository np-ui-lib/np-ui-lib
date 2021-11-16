import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpDirectivesDemoRoutingModule } from "./np-directives-demo-routing.module";
import { NpDirectivesDemoComponent } from "./np-directives-demo.component";
import {
  NpCardModule,
  NpAutofocusModule,
  NpHighlightModule,
  NpOrderByModule,
  NpDeferModule,
} from "np-ui-lib";

@NgModule({
  declarations: [NpDirectivesDemoComponent],
  imports: [
    CommonModule,
    NpDirectivesDemoRoutingModule,
    NpCardModule,
    NpAutofocusModule,
    NpHighlightModule,
    NpOrderByModule,
    NpDeferModule,
  ],
})
export class NpDirectivesDemoModule {}
