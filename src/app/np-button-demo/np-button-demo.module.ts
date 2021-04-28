import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpButtonDemoRoutingModule } from "./np-button-demo-routing.module";
import { NpButtonDemoComponent } from "./np-button-demo.component";
import { NpCardModule } from "np-ui-lib";

@NgModule({
  declarations: [NpButtonDemoComponent],
  imports: [CommonModule, NpButtonDemoRoutingModule, NpCardModule],
})
export class NpButtonDemoModule {}
