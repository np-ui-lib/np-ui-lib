import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpSidepanelComponent } from "./np-sidepanel.component";
import { PortalModule } from "@angular/cdk/portal";
import { NpSidepanelContent } from "./np-sidepanel-content.directive";

@NgModule({
  declarations: [NpSidepanelComponent, NpSidepanelContent],
  imports: [CommonModule, PortalModule],
  exports: [NpSidepanelComponent, NpSidepanelContent],
})
export class NpSidepanelModule {}
