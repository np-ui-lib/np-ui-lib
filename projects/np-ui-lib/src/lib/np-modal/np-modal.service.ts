import { Overlay, OverlayConfig, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { NpModalRef } from './np-modal-ref';
import { NpModalContainerComponent } from './np-modal-container.component';
import { NpModalConfig } from './np-modal.config';

@Injectable()
export class NpModalService {
    constructor(
        private overlay: Overlay,
        private injector: Injector,
        private overlayPositionBuilder: OverlayPositionBuilder) { }

    open(
        content: string | TemplateRef<any> | Type<any>,
        config: NpModalConfig,
        data: any
    ): NpModalRef {
        const positionStrategy = this.overlayPositionBuilder.global().centerHorizontally().centerVertically();
        if (!config) {
            config = new NpModalConfig({});
        }
        const configs = new OverlayConfig({
            positionStrategy,
            hasBackdrop: config.hasBackDrop,
            backdropClass: config.backDropClass,
            height: config.height,
            width: config.width,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            panelClass: config.panelClass
        });

        const overlayRef = this.overlay.create(configs);
        const myOverlayRef = new NpModalRef(overlayRef, content, config, data);
        const portalInjector = this.createInjector(myOverlayRef, this.injector);
        overlayRef.attach(new ComponentPortal(NpModalContainerComponent, null, portalInjector));
        return myOverlayRef;
    }

    private createInjector(ref: NpModalRef, inj: Injector) {
        const injectorTokens = new WeakMap();
        injectorTokens.set(NpModalRef, ref);
        return new PortalInjector(inj, injectorTokens);
    }
}
