import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HowToAddRoutingModule } from "./how-to-add-routing.module";
import { HowToAddComponent } from "./how-to-add.component";
import { NpCardModule } from "np-ui-lib";

@NgModule({
  declarations: [HowToAddComponent],
  imports: [CommonModule, HowToAddRoutingModule, NpCardModule],
})
export class HowToAddModule {}
