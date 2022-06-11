import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { NpModalContainerComponent } from "./np-modal-container.component";
import { NpModalService } from "./np-modal.service";

@NgModule({
    declarations: [NpModalContainerComponent],
    imports: [CommonModule, OverlayModule, PortalModule],
    exports: [NpModalContainerComponent],
    providers: [NpModalService]
})
export class NpModalModule { }
