import {
  Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, TemplateRef,
  ViewContainerRef, Input, Output, EventEmitter
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { OverlayRef, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';

@Component({
  selector: 'np-sidepanel',
  templateUrl: './np-sidepanel.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpSidepanelComponent implements OnInit {
  static controlCount = 1;

  // left | right | top | bottom
  @Input() position = 'left';
  @Input() height: number | string;
  @Input() width: number | string;
  @Input() closeOnClickOutside = true;
  @Input() backDropClass = 'np-sidepanel-backdrop';
  @Input() hasBackDrop = true;
  @Input() styleClass: string;
  @Input() inputId = `np-sidepanel_${NpSidepanelComponent.controlCount++}`;

  @Output() onOpen: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;

  private templatePortal: TemplatePortal<any>;
  private overlayRef: OverlayRef;

  constructor(
    public overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private overlayPositionBuilder: OverlayPositionBuilder) { }

  ngOnInit(): void {
  }

  close(data: any) {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
      this.onClose.emit(data);
    }
  }

  open(data: any) {
    // if overlay is not attached then only attach
    if (this.overlayRef === undefined || !this.overlayRef.hasAttached()) {
      const positionStrategy = this.overlayPositionBuilder.global();
      if (this.position === 'left') {
        positionStrategy.left('0');
      }
      if (this.position === 'right') {
        positionStrategy.right('0');
      }
      if (this.position === 'top') {
        positionStrategy.top('0');
      }
      if (this.position === 'bottom') {
        positionStrategy.bottom('0');
      }
      this.overlayRef = this.overlay.create({
        positionStrategy,
        hasBackdrop: this.hasBackDrop,
        backdropClass: this.backDropClass,
        height: this.height,
        width: this.width,
        scrollStrategy: this.overlay.scrollStrategies.block(),
        panelClass: 'np-sidepanel-overlay'
      });
      this.templatePortal = new TemplatePortal(
        this.templatePortalContent,
        this.viewContainerRef
      );
      this.overlayRef.backdropClick().subscribe(() => {
        if (this.closeOnClickOutside) {
          this.close(null);
        }
      });
      this.overlayRef.attach(this.templatePortal);
      this.onOpen.emit(data);
    }
  }
}
