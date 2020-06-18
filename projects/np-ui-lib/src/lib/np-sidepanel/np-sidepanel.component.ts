import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { OverlayRef, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';

@Component({
  selector: 'np-sidepanel',
  templateUrl: './np-sidepanel.component.html',
  styleUrls: ['./np-sidepanel.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpSidepanelComponent implements OnInit {

  @ViewChild("templatePortalContent") templatePortalContent: TemplateRef<any>;
  private templatePortal: TemplatePortal<any>;
  private overlayRef: OverlayRef;

  @Input() top: string;
  @Input() bottom: string;
  @Input() left: string;
  @Input() right: string;
  @Input() height: number | string;
  @Input() width: number | string;
  @Input() showCloseIcon: boolean = true;
  @Input() closeOnClickOutside: boolean = true;
  @Input() styleClass: string;
  @Input() backDropClass: string = "np-sp-backdrop";
  static controlCount = 1;
  @Input() inputId: string = `np-sidepanel_${NpSidepanelComponent.controlCount++}`;

  constructor(
    public overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
    private overlayPositionBuilder: OverlayPositionBuilder) { }

  ngOnInit(): void {
  }

  close() {
    this.overlayRef.detach();
  }

  open() {
    // if overlay is not attached then only attach
    if (this.overlayRef == undefined || !this.overlayRef.hasAttached()) {
      const positionStrategy = this.overlayPositionBuilder.global();
      if (this.left) {
        positionStrategy.left(this.left);
      }
      if (this.right) {
        positionStrategy.right(this.right);
      }
      if (this.top) {
        positionStrategy.top(this.top);
      }
      if (this.bottom) {
        positionStrategy.bottom(this.bottom);
      }
      this.overlayRef = this.overlay.create({
        positionStrategy,
        hasBackdrop: true,
        backdropClass: this.backDropClass,
        height: this.height,
        width: this.width,
        scrollStrategy: this.overlay.scrollStrategies.block()
      });
      this.templatePortal = new TemplatePortal(
        this.templatePortalContent,
        this._viewContainerRef
      );
      this.overlayRef.backdropClick().subscribe(() => {
        if (this.closeOnClickOutside) {
          this.close();
        }
      }
      );
      this.overlayRef.attach(this.templatePortal);
    }
  }

}
