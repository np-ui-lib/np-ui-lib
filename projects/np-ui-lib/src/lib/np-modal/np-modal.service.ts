import { Overlay, OverlayConfig, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { NpModalRef } from './np-modal-ref';
import { NpModalContainerComponent } from './np-modal-container.component';
import { NpModalConfig } from './np-modal.config';
import { NpDialogComponent } from '../np-dialog/np-dialog.component';

@Injectable()
export class NpModalService {
    constructor(
        private overlay: Overlay,
        private injector: Injector,
        private overlayPositionBuilder: OverlayPositionBuilder) { }

    open(content: string | TemplateRef<any> | Type<any>,
        config: NpModalConfig,
        data: any): NpModalRef {
        const positionStrategy = this.overlayPositionBuilder.global().centerHorizontally().centerVertically();
        if (!config) {
            config = new NpModalConfig({});
        }
        if (content === NpDialogComponent) {
            config.closeOnClickOutside = false;
        }
        const overlayConfig = new OverlayConfig({
            positionStrategy,
            hasBackdrop: config.hasBackDrop,
            backdropClass: config.backDropClass || (content !== NpDialogComponent ? 'np-modal-backdrop' : 'np-dialog-backdrop'),
            height: config.height,
            width: config.width,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            panelClass: content !== NpDialogComponent ? 'np-modal-overlay' : 'np-dialog-overlay'
        });
        const overlayRef = this.overlay.create(overlayConfig);
        const myOverlayRef = new NpModalRef(overlayRef, content, config, data);
        const injector = Injector.create({
            parent: this.injector,
            providers: [{ provide: NpModalRef, useValue: myOverlayRef }]
        });

        if (content !== NpDialogComponent) {
            overlayRef.attach(new ComponentPortal(NpModalContainerComponent, null, injector));
        } else {
            overlayRef.attach(new ComponentPortal(NpDialogComponent, null, injector));
        }
        return myOverlayRef;
    }
}
