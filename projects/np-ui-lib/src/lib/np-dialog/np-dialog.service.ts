import {
  Overlay,
  OverlayConfig,
  OverlayPositionBuilder,
} from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Injectable, Injector, TemplateRef } from "@angular/core";
import { NpDialogRef } from "./np-dialog-ref";
import { NpDialogContainerComponent } from "./np-dialog-container.component";
import { NpDialogConfig } from "./np-dialog.config";

@Injectable()
export class NpDialogService {
  constructor(
    private overlay: Overlay,
    private injector: Injector,
    private overlayPositionBuilder: OverlayPositionBuilder
  ) {}

  open(
    content: string | TemplateRef<any>,
    config: NpDialogConfig,
    data: any
  ): NpDialogRef {
    const positionStrategy = this.overlayPositionBuilder
      .global()
      .centerHorizontally()
      .centerVertically();
    if (!config) {
      config = new NpDialogConfig({});
    }
    const overlayConfig = new OverlayConfig({
      positionStrategy,
      hasBackdrop: config.hasBackDrop,
      backdropClass: config.backDropClass || "np-dialog-backdrop",
      scrollStrategy: this.overlay.scrollStrategies.block(),
      panelClass: "np-dialog-overlay",
    });
    const overlayRef = this.overlay.create(overlayConfig);
    const myOverlayRef = new NpDialogRef(overlayRef, content, config, data);
    const injector = Injector.create({
      parent: this.injector,
      providers: [{ provide: NpDialogRef, useValue: myOverlayRef }],
    });

    overlayRef.attach(new ComponentPortal(NpDialogContainerComponent, null, injector));

    return myOverlayRef;
  }
}
