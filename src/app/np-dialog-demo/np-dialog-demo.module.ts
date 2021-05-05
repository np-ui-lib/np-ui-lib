import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpDialogDemoRoutingModule } from "./np-dialog-demo-routing.module";
import { NpDialogDemoComponent } from "./np-dialog-demo.component";
import { NpDialogModule, NpTabsModule, NpCardModule } from "np-ui-lib";

@NgModule({
  declarations: [NpDialogDemoComponent],
  imports: [
    CommonModule,
    NpDialogDemoRoutingModule,
    NpDialogModule,
    NpTabsModule,
    NpCardModule,
  ],
})
export class NpDialogDemoModule {}
