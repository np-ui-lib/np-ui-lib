import {
  Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, TemplateRef,
  ViewContainerRef, Input, Output, EventEmitter, ContentChild, OnInit, OnDestroy
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { OverlayRef, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { NpSidepanelContent } from './np-sidepanel-content.directive';
import { NpSidepanelService } from './np-sidepanel.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'np-sidepanel',
  templateUrl: './np-sidepanel.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpSidepanelComponent implements OnInit, OnDestroy {

  private static controlCount = 1;

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
  @ContentChild(NpSidepanelContent, { read: TemplateRef, static: true }) _explicitContent: TemplateRef<any>;
  private _contentPortal: TemplatePortal | null = null;
  get content(): TemplatePortal | null {
    return this._contentPortal;
  }

  private templatePortal: TemplatePortal<any>;
  private overlayRef: OverlayRef;
  private sidepanelRef = new Subject<any>();

  constructor(
    public overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private sidepanelService: NpSidepanelService) {
  }

  ngOnInit(): void {
    this.sidepanelRef = this.sidepanelService._add(this.inputId);
    this.sidepanelRef.subscribe((data) => {
      this.close(data);
    });
  }

  ngOnDestroy(): void {
    this.sidepanelRef.unsubscribe();
    this.sidepanelService._remove(this.inputId);
  }

  open(data: any): Subject<any> {
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
      if (!this._contentPortal && this._explicitContent) {
        this._contentPortal = new TemplatePortal(this._explicitContent, this.viewContainerRef);
      }
      this.overlayRef.attach(this.templatePortal);
      this.onOpen.emit(data);
      return this.sidepanelRef;
    }
    return null;
  }

  close(data: any) {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      if (this._contentPortal && this._contentPortal.isAttached) {
        this._contentPortal.detach();
      }
      this.overlayRef.detach();
      this.onClose.emit(data);
    }
  }
}
