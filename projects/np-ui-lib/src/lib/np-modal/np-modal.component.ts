import { Component, ViewChild, TemplateRef, ViewContainerRef, ViewEncapsulation, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Overlay, OverlayRef, OverlayPositionBuilder } from "@angular/cdk/overlay";
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'np-modal',
  templateUrl: './np-modal.component.html',
  styleUrls: ['./np-modal.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpModalComponent {

  @Input() height: number;
  @Input() width: number;
  @Input() styleClass: string;
  @Output() onOpen: EventEmitter<void> = new EventEmitter();
  @Output() onClose: EventEmitter<void> = new EventEmitter();

  _isShowLoader: boolean = false;

  @ViewChild("templatePortalContent") templatePortalContent: TemplateRef<any>;
  private templatePortal: TemplatePortal<any>;
  private overlayRef: OverlayRef;

  constructor(
    public overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
    private overlayPositionBuilder: OverlayPositionBuilder) { }

  _close() {
    this.overlayRef.detach();
    this.onClose.emit();
  }

  close() {
    this._close();
  }

  open() {
    // if overlay is not attached then only attach
    if (this.overlayRef == undefined || !this.overlayRef.hasAttached()) {
      const positionStrategy = this.overlayPositionBuilder.global().centerHorizontally().centerVertically();
      this.overlayRef = this.overlay.create({
        positionStrategy,
        hasBackdrop: true,
        backdropClass: "np-mod-backdrop",
        height: this.height,
        width: this.width,
        scrollStrategy: this.overlay.scrollStrategies.block(),
        panelClass: "np-mod-overlay"
      });
      this.templatePortal = new TemplatePortal(
        this.templatePortalContent,
        this._viewContainerRef
      );
      this.overlayRef.backdropClick().subscribe(() => this._close());

      this.overlayRef.attach(this.templatePortal);
      this.onOpen.emit();
    }
  }

  showLoader() {
    this._isShowLoader = true;
  }

  hideLoader() {
    this._isShowLoader = false;
  }

}
