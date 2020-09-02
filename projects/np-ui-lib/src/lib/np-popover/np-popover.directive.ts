import { Directive, HostListener, Input, AfterViewInit, ComponentRef, ElementRef, TemplateRef, OnDestroy, EventEmitter, Output } from '@angular/core';
import { OverlayRef, Overlay, OverlayPositionBuilder, ConnectedPosition } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NpPopoverComponent } from './np-popover.component';
import { NpUtilityService } from '../np-utility/np-utility.service';

@Directive({
    selector: '[np-popover]',
    exportAs: 'NpPopoverDirective'
})
export class NpPopoverDirective implements AfterViewInit, OnDestroy {

    @Input() placement: string;
    @Input() header: string | TemplateRef<any>;
    @Input() body: string | TemplateRef<any>;
    @Input() openOnClick: boolean;
    @Input() width: number;
    @Input() closeOnClickOutside = true;
    @Input() backDropClass = 'np-popover-backdrop';
    @Input() hasBackDrop = true;
    @Input() styleClass: string;

    @Output() onOpen: EventEmitter<any> = new EventEmitter();
    @Output() onClose: EventEmitter<any> = new EventEmitter();

    private overlayRef: OverlayRef;

    constructor(
        private overlay: Overlay,
        private overlayPositionBuilder: OverlayPositionBuilder,
        private elementRef: ElementRef,
        private utility: NpUtilityService) {
    }

    ngAfterViewInit(): void {
        this.elementRef.nativeElement.className = (`${this.elementRef.nativeElement.className} np-popover-target`).trim();
        const position: ConnectedPosition[] = this.utility.getPosition(this.placement);
        const positionStrategy = this.overlayPositionBuilder
            .flexibleConnectedTo(this.elementRef)
            .withPositions(position);
        if (this.openOnClick) {
            this.overlayRef = this.overlay.create({
                positionStrategy,
                hasBackdrop: this.hasBackDrop,
                backdropClass: this.backDropClass
            });
            this.overlayRef.backdropClick().subscribe(() => {
                if (this.closeOnClickOutside) {
                    this._close();
                }
            });
        } else {
            this.overlayRef = this.overlay.create({
                positionStrategy
            });
        }
    }

    ngOnDestroy() {
        if (this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
        }
    }

    @HostListener('mouseenter')
    _showOnMouseEnter() {
        if (this.openOnClick) {
            return;
        }
        this._open();
    }

    @HostListener('click')
    _openOnClick() {
        if (!this.openOnClick) {
            return;
        }
        if (this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
        } else {
            this._open();
        }
    }

    _open() {
        const popoverPortal = new ComponentPortal(NpPopoverComponent);
        const popoverRef: ComponentRef<NpPopoverComponent> = this.overlayRef.attach(popoverPortal);
        popoverRef.instance.header = this.header;
        popoverRef.instance.body = this.body;
        popoverRef.instance.width = this.width;
        popoverRef.instance.styleClass = this.styleClass;
        this.onOpen.emit();
    }

    @HostListener('mouseout')
    _hideOnMouseLeave() {
        if (this.openOnClick) {
            return;
        }
        this._close();
    }

    _close() {
        if (this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.onClose.emit();
        }
    }

    open() {
        this._open();
    }

    close() {
        this._close();
    }
}
