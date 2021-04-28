import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpBreadcrumbDemoRoutingModule } from "./np-breadcrumb-demo-routing.module";
import { NpBreadcrumbDemoComponent } from "./np-breadcrumb-demo.component";
import { NpBreadcrumbModule, NpCardModule, NpTabsModule } from "np-ui-lib";

@NgModule({
  declarations: [NpBreadcrumbDemoComponent],
  imports: [
    CommonModule,
    NpBreadcrumbDemoRoutingModule,
    NpBreadcrumbModule,
    NpCardModule,
    NpTabsModule,
  ],
})
export class NpBreadcrumbDemoModule {}
