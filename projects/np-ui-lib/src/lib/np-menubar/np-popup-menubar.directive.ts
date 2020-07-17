import { Directive, HostListener, Input, AfterViewInit, ComponentRef, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { OverlayRef, Overlay, OverlayPositionBuilder, ConnectedPosition } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NpMenubarComponent } from './np-menubar.component';
import { NpMenuItem } from './np-menu.model';

@Directive({ selector: '[np-popup-menubar]' })
export class NpPopupMenubarDirective implements AfterViewInit, OnDestroy {

    @Input() items: NpMenuItem[];
    @Input() styleClass: string;
    @Output() onClickMenuItem: EventEmitter<any> = new EventEmitter();

    private overlayRef: OverlayRef;

    constructor(
        private overlay: Overlay,
        private overlayPositionBuilder: OverlayPositionBuilder,
        private elementRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        this.elementRef.nativeElement.className = (`${this.elementRef.nativeElement.className} np-mb-target`).trim();
        const position: ConnectedPosition[] = this._getPosition();
        const positionStrategy = this.overlayPositionBuilder
            .flexibleConnectedTo(this.elementRef)
            .withPositions(position);
        this.overlayRef = this.overlay.create({
            positionStrategy,
            hasBackdrop: true,
            backdropClass: 'np-mb-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
        this.overlayRef.backdropClick().subscribe(() => this._close());
    }

    ngOnDestroy() {
        if (this.overlayRef.hasAttached()) {
            this._close();
        }
    }

    _close() {
        this.overlayRef.detach();
    }

    @HostListener('click')
    show() {
        if (this.overlayRef.hasAttached()) {
            this._close();
            return;
        }
        const menubarPortal = new ComponentPortal(NpMenubarComponent);
        const menubarRef: ComponentRef<NpMenubarComponent> = this.overlayRef.attach(menubarPortal);
        menubarRef.instance.items = this.items;
        menubarRef.instance.styleClass = this.styleClass;
        menubarRef.instance._onCloseMenu = new EventEmitter();
        menubarRef.instance._onCloseMenu.subscribe(() => this._close());
        menubarRef.instance.onClickMenuItem = this.onClickMenuItem;
    }

    _getPosition(): ConnectedPosition[] {
        return [
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            }
        ];
    }
}
