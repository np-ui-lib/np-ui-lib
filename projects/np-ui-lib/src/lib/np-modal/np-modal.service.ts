import {
  Overlay,
  OverlayConfig,
  OverlayPositionBuilder,
} from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Injectable, Injector, TemplateRef, Type } from "@angular/core";
import { NpModalRef } from "./np-modal-ref";
import { NpModalContainerComponent } from "./np-modal-container.component";
import { NpModalConfig } from "./np-modal.config";

@Injectable()
export class NpModalService {
  constructor(
    private overlay: Overlay,
    private injector: Injector,
    private overlayPositionBuilder: OverlayPositionBuilder
  ) { }

  open(
    content: string | TemplateRef<any> | Type<any>,
    config: NpModalConfig,
    data: any
  ): NpModalRef {
    const positionStrategy = this.overlayPositionBuilder
      .global()
      .centerHorizontally()
      .centerVertically();

    if (!config) {
      config = new NpModalConfig({});
    }

    const overlayConfig = new OverlayConfig({
      positionStrategy,
      hasBackdrop: config.hasBackDrop,
      backdropClass: config.backDropClass || "np-modal-backdrop",
      height: config.height,
      width: config.width,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      panelClass: "np-modal-overlay",
    });
    const overlayRef = this.overlay.create(overlayConfig);
    const myOverlayRef = new NpModalRef(overlayRef, content, config, data);
    const injector = Injector.create({
      parent: this.injector,
      providers: [{ provide: NpModalRef, useValue: myOverlayRef }],
    });
    overlayRef.attach(
      new ComponentPortal(NpModalContainerComponent, null, injector)
    );
    return myOverlayRef;
  }
}
