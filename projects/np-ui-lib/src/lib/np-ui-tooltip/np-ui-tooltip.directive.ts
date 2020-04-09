import { Directive, HostListener, Input, AfterViewInit, ComponentRef, ElementRef, TemplateRef } from '@angular/core';
import { OverlayRef, Overlay, OverlayPositionBuilder, ConnectedPosition } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NpUiTooltipComponent } from './np-ui-tooltip.component';

@Directive({ selector: '[np-ui-tooltip]' })
export class NpUiTooltipDirective implements AfterViewInit {

    @Input() tooltipText: string;
    @Input() tooltipTemplate: TemplateRef<any>;
    @Input() placement: string;

    private overlayRef: OverlayRef;

    constructor(private overlay: Overlay,
        private overlayPositionBuilder: OverlayPositionBuilder,
        private elementRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        this.elementRef.nativeElement.className = (this.elementRef.nativeElement.className + ' np-tt-target').trim();
        var position: ConnectedPosition[] = this._getPosition();
        const positionStrategy = this.overlayPositionBuilder
            .flexibleConnectedTo(this.elementRef)
            .withPositions(position);
        this.overlayRef = this.overlay.create({ positionStrategy });
    }

    ngOnDestroy() {
        this.overlayRef.detach();
    }

    @HostListener('mouseenter')
    show() {
        const tooltipPortal = new ComponentPortal(NpUiTooltipComponent);
        const tooltipRef: ComponentRef<NpUiTooltipComponent> = this.overlayRef.attach(tooltipPortal);
        tooltipRef.instance.tooltipText = this.tooltipText;
    }

    @HostListener('mouseout')
    hide() {
        this.overlayRef.detach();
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
}