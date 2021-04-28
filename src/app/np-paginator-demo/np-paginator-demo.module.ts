import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpPaginatorDemoRoutingModule } from "./np-paginator-demo-routing.module";
import { NpPaginatorDemoComponent } from "./np-paginator-demo.component";
import { NpPaginatorModule, NpTabsModule, NpCardModule } from "np-ui-lib";

@NgModule({
  declarations: [NpPaginatorDemoComponent],
  imports: [
    CommonModule,
    NpPaginatorDemoRoutingModule,
    NpPaginatorModule,
    NpTabsModule,
    NpCardModule,
  ],
})
export class NpPaginatorDemoModule {}
