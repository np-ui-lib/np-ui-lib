import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpLoaderDemoRoutingModule } from "./np-loader-demo-routing.module";
import { NpLoaderDemoComponent } from "./np-loader-demo.component";
import { NpLoaderModule, NpTabsModule, NpCardModule } from "np-ui-lib";

@NgModule({
  declarations: [NpLoaderDemoComponent],
  imports: [
    CommonModule,
    NpLoaderDemoRoutingModule,
    NpLoaderModule,
    NpTabsModule,
    NpCardModule,
  ],
})
export class NpLoaderDemoModule {}
