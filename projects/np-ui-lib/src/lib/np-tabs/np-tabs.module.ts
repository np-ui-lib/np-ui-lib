import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpTabsComponent } from "./np-tabs.component";
import { NpTabComponent } from "./np-tab.component";
import { NpTabContent } from "./np-tab-content.directive";
import { PortalModule } from "@angular/cdk/portal";

@NgModule({
  declarations: [NpTabsComponent, NpTabComponent, NpTabContent],
  imports: [CommonModule, PortalModule],
  exports: [NpTabsComponent, NpTabComponent, NpTabContent],
})
export class NpTabsModule { }
