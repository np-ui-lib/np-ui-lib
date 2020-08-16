import { Directive, Input, AfterViewInit, ComponentRef, ElementRef, TemplateRef, OnDestroy } from '@angular/core';
import { OverlayRef, Overlay, OverlayPositionBuilder, ConnectedPosition } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NpTooltipComponent } from './np-tooltip.component';

@Directive({ selector: '[np-tooltip]' })
export class NpTooltipDirective implements AfterViewInit, OnDestroy {

    @Input('np-tooltip') text: string | TemplateRef<any>;
    @Input() placement: string;
    @Input() styleClass: string;
    @Input() tooltipOnFocus = false;

    private overlayRef: OverlayRef;

    mouseEnterListener: () => void = () => { };
    mouseLeaveListener: () => void = () => { };
    focusListener: () => void = () => { };
    blurListener: () => void = () => { };

    constructor(
        private overlay: Overlay,
        private overlayPositionBuilder: OverlayPositionBuilder,
        private elementRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        this.elementRef.nativeElement.className = (`${this.elementRef.nativeElement.className} np-tooltip-target`).trim();
        const position: ConnectedPosition[] = this._getPosition();
        const positionStrategy = this.overlayPositionBuilder
            .flexibleConnectedTo(this.elementRef)
            .withPositions(position);
        this.overlayRef = this.overlay.create({
            positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });

        if (this.tooltipOnFocus) {
            this.focusListener = this._show.bind(this);
            this.blurListener = this._hide.bind(this);
            this.elementRef.nativeElement.addEventListener('focus', this.focusListener);
            this.elementRef.nativeElement.addEventListener('blur', this.blurListener);
        } else {
            this.mouseEnterListener = this._show.bind(this);
            this.mouseLeaveListener = this._hide.bind(this);
            this.elementRef.nativeElement.addEventListener('mouseenter', this.mouseEnterListener);
            this.elementRef.nativeElement.addEventListener('mouseleave', this.mouseLeaveListener);
        }
    }

    ngOnDestroy() {
        if (this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
        }
    }

    _show() {
        const tooltipPortal = new ComponentPortal(NpTooltipComponent);
        const tooltipRef: ComponentRef<NpTooltipComponent> = this.overlayRef.attach(tooltipPortal);
        tooltipRef.instance.tooltip = this.text;
        tooltipRef.instance.styleClass = this.styleClass;
    }

    _hide() {
        if (this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
        }
    }

    _getPosition(): ConnectedPosition[] {
        let result: ConnectedPosition[];
        switch (this.placement) {
            case 'left':
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
            case 'right':
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
            case 'top':
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
            case 'bottom':
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
