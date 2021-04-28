import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpI18nDemoRoutingModule } from "./np-i18n-demo-routing.module";
import { NpI18nDemoComponent } from "./np-i18n-demo.component";
import { NpAlertModule, NpTabsModule } from "np-ui-lib";

@NgModule({
  declarations: [NpI18nDemoComponent],
  imports: [CommonModule, NpI18nDemoRoutingModule, NpTabsModule, NpAlertModule],
})
export class NpI18nDemoModule {}
