import { Subject } from 'rxjs';
import { OverlayRef } from '@angular/cdk/overlay';
import { TemplateRef, Type } from '@angular/core';
import { NpModalConfig } from './np-modal.config';

export class NpModalRef {
    onClose = new Subject<any>();

    constructor(
        public overlay: OverlayRef,
        public content: string | TemplateRef<any> | Type<any>,
        public config: NpModalConfig,
        public data: any) {
        overlay.backdropClick().subscribe(() => {
            if (config.closeOnClickOutside === true) {
                this._close(null);
            }
        });
    }

    close(data?: any) {
        this._close(data);
    }

    private _close(data: any) {
        this.overlay.dispose();
        this.onClose.next(data);
        this.onClose.complete();
    }
}
