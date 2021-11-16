import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpTagsDemoRoutingModule } from "./np-tags-demo-routing.module";
import { NpTagsDemoComponent } from "./np-tags-demo.component";
import {
  NpTagsModule,
  NpTabsModule,
  NpCardModule,
  NpAlertModule,
  NpHighlightModule,
} from "np-ui-lib";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [NpTagsDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpTagsDemoRoutingModule,
    NpTagsModule,
    NpTabsModule,
    NpCardModule,
    NpAlertModule,
    NpHighlightModule,
  ],
})
export class NpTagsDemoModule {}
