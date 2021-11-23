import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpPanelComponent } from "./np-panel.component";
import { NpPanelContent } from "./np-panel-content.directive";
import { PortalModule } from "@angular/cdk/portal";

@NgModule({
  declarations: [NpPanelComponent, NpPanelContent],
  imports: [CommonModule, PortalModule],
  exports: [NpPanelComponent, NpPanelContent],
})
export class NpPanelModule { }
