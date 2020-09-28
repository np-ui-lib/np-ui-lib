import {
  Component, ViewEncapsulation, ChangeDetectionStrategy, Input, TemplateRef,
  Output, EventEmitter, ElementRef, ContentChild, ViewContainerRef, OnInit, OnDestroy
} from '@angular/core';
import { NpPanelContent } from './np-panel-content.directive';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'np-panel',
  templateUrl: './np-panel.component.html',
  styleUrls: ['./np-panel.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpPanelComponent implements OnInit, OnDestroy {
  static controlCount = 1;

  @Input() title: string | TemplateRef<any>;
  @Input() allowToMinimize: boolean;
  @Input() allowToZoom: boolean;
  @Input() allowToClose: boolean;
  @Input() isOpen = true;
  @Input() height: number;
  @Input() disabled: boolean;
  @Input() iconCss: string;
  @Input() styleClass: string;
  @Input() inputId = `np-panel_${NpPanelComponent.controlCount++}`;

  @Output() onExpand: EventEmitter<any> = new EventEmitter();
  @Output() onCollapse: EventEmitter<any> = new EventEmitter();

  isTitleTemplate: boolean;
  isZoom = false;

  @ContentChild(NpPanelContent, { read: TemplateRef, static: true }) _explicitContent: TemplateRef<any>;
  private _contentPortal: TemplatePortal | null = null;
  get content(): TemplatePortal | null {
    return this._contentPortal;
  }

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private el: ElementRef) {
  }

  ngOnInit(): void {
    if (this.title instanceof TemplateRef) {
      this.isTitleTemplate = true;
    }
    if (this.isOpen) {
      if (!this._contentPortal && this._explicitContent) {
        this._contentPortal = new TemplatePortal(this._explicitContent, this._viewContainerRef);
      }
    }
  }

  _toggle() {
    if (this.disabled) {
      return;
    }
    if (this.isOpen) {
      this.isOpen = false;
      this.onCollapse.emit(this);
      return;
    }
    this.isOpen = true;
    if (!this._contentPortal && this._explicitContent) {
      this._contentPortal = new TemplatePortal(this._explicitContent, this._viewContainerRef);
    }
    this.onExpand.emit(this);
  }

  _toggleZoom() {
    if (this.disabled) {
      return;
    }
    if (this.isZoom) {
      this.isZoom = false;
      return;
    }
    if (!this.isOpen) {
      this._toggle();
    }
    this.isZoom = true;
  }

  _close() {
    if (this.disabled) {
      return;
    }
    this.el.nativeElement.remove();
  }

  ngOnDestroy(): void {
    if (this._contentPortal && this._contentPortal.isAttached) {
      this._contentPortal.detach();
    }
  }

  _getTitleId() {
    return this.inputId + '_title';
  }
}
