import { Directive, HostListener, Input, AfterViewInit, ComponentRef, ElementRef, TemplateRef } from '@angular/core';
import { OverlayRef, Overlay, OverlayPositionBuilder, ConnectedPosition } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NpPopoverComponent } from './np-popover.component';

@Directive({
    selector: '[np-popover]',
    exportAs: "NpPopoverDirective"
})
export class NpPopoverDirective implements AfterViewInit {

    @Input() placement: string;
    @Input() header: string | TemplateRef<any>;
    @Input() body: string | TemplateRef<any>;
    @Input() showOnClick: boolean;
    @Input() width: number;
    @Input() styleClass: string;

    private overlayRef: OverlayRef;

    constructor(private overlay: Overlay,
        private overlayPositionBuilder: OverlayPositionBuilder,
        private elementRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        this.elementRef.nativeElement.className = (`${this.elementRef.nativeElement.className} np-pop-target`).trim();
        var position: ConnectedPosition[] = this._getPosition();
        const positionStrategy = this.overlayPositionBuilder
            .flexibleConnectedTo(this.elementRef)
            .withPositions(position);
        if (this.showOnClick) {
            this.overlayRef = this.overlay.create({ positionStrategy, hasBackdrop: true, backdropClass: "np-pop-backdrop" });
            this.overlayRef.backdropClick().subscribe(() => this._hide());
        } else {
            this.overlayRef = this.overlay.create({ positionStrategy });
        }
    }

    ngOnDestroy() {
        if (this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
        }
    }

    @HostListener('mouseenter')
    _showOnMouseEnter() {
        if (this.showOnClick) {
            return;
        }
        this._show();
    }

    @HostListener('click')
    _showOnClick() {
        if (!this.showOnClick) {
            return;
        }
        if (this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
        } else {
            this._show();
        }
    }

    _show() {
        const popoverPortal = new ComponentPortal(NpPopoverComponent);
        const popoverRef: ComponentRef<NpPopoverComponent> = this.overlayRef.attach(popoverPortal);
        popoverRef.instance.header = this.header;
        popoverRef.instance.body = this.body;
        popoverRef.instance.width = this.width;
        popoverRef.instance.styleClass = this.styleClass;
    }

    @HostListener('mouseout')
    _hideOnMouseLeave() {
        if (this.showOnClick) {
            return;
        }
        this._hide();
    }

    _hide() {
        if (this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
        }
    }

    _getPosition(): ConnectedPosition[] {
        var result: ConnectedPosition[];
        switch (this.placement) {
            case "left":
                {
                    result = [{
                        originX: 'start',
                        originY: 'center',
                        overlayX: 'end',
                        overlayY: 'center',
                        offsetX: -5
                    }];
                    break;
                }
            case "right":
                {
                    result = [{
                        originX: 'end',
                        originY: 'center',
                        overlayX: 'start',
                        overlayY: 'center',
                        offsetX: 5
                    }];
                    break;
                }
            case "top":
                {
                    result = [{
                        originX: 'center',
                        originY: 'top',
                        overlayX: 'center',
                        overlayY: 'bottom',
                        offsetY: -5
                    }];
                    break;
                }
            case "bottom":
            default:
                {
                    result = [{
                        originX: 'center',
                        originY: 'bottom',
                        overlayX: 'center',
                        overlayY: 'top',
                        offsetY: 5
                    }];
                    break;
                }
        }
        return result;
    }

    show() {
        this._show();
    }

    close() {
        this._hide();
    }
}