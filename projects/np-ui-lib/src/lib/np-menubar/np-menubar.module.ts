import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpMenubarComponent } from "./np-menubar.component";
import { RouterModule } from "@angular/router";
import { OverlayModule } from "@angular/cdk/overlay";
import { NpPopupMenubarDirective } from "./np-popup-menubar.directive";
import { NpMenuItemComponent } from "./np-menu-item/np-menu-item.component";
import { NpPanelMenuItemComponent } from "./np-panel-menu-item/np-panel-menu-item.component";

@NgModule({
  declarations: [
    NpMenubarComponent,
    NpPopupMenubarDirective,
    NpMenuItemComponent,
    NpPanelMenuItemComponent,
  ],
  imports: [CommonModule, RouterModule, OverlayModule],
  entryComponents: [NpMenubarComponent],
  exports: [NpMenubarComponent, NpPopupMenubarDirective],
})
export class NpMenubarModule {}
