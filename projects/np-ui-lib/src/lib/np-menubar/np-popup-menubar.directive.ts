import {
    Directive, HostListener, Input, AfterViewInit, ComponentRef,
    ElementRef, EventEmitter, Output, OnDestroy
} from '@angular/core';
import { OverlayRef, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NpMenubarComponent } from './np-menubar.component';
import { NpMenuItem } from './np-menu.model';
import { Subscription } from 'rxjs';
import { TopBottomOverlayPositions } from '../np-utility/np-constants';

@Directive({
    selector: '[npPopupMenubar]'
})
export class NpPopupMenubarDirective implements AfterViewInit, OnDestroy {

    @Input() items: NpMenuItem[];
    @Input() styleClass: string;

    @Output() onClickMenuItem: EventEmitter<any> = new EventEmitter();

    subscription: Subscription;

    private overlayRef: OverlayRef;

    constructor(
        private overlay: Overlay,
        private overlayPositionBuilder: OverlayPositionBuilder,
        private elementRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        this.elementRef.nativeElement.className = (`${this.elementRef.nativeElement.className} np-menubar-target`).trim();
        const positionStrategy = this.overlayPositionBuilder
            .flexibleConnectedTo(this.elementRef)
            .withPositions(TopBottomOverlayPositions);
        this.overlayRef = this.overlay.create({
            positionStrategy,
            hasBackdrop: true,
            backdropClass: 'np-menubar-backdrop',
            panelClass: 'np-menubar-overlay',
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
        this.overlayRef.backdropClick().subscribe(() => this._close());
        this.subscription = this.onClickMenuItem.subscribe(() => {
            setTimeout(() => {
                this._close();
            }, 100);
        });
    }

    ngOnDestroy() {
        if (this.overlayRef.hasAttached()) {
            this._close();
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
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
        menubarRef.instance.onClickMenuItem = this.onClickMenuItem;
    }

    _close() {
        this.overlayRef.detach();
    }
}
