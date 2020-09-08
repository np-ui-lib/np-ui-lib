import {
  Component, Input, TemplateRef, ViewEncapsulation, ChangeDetectionStrategy, Output,
  EventEmitter, ContentChild, ViewContainerRef, OnInit, OnDestroy
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { NpAccordionContent } from './np-accordion-content.directive';

@Component({
  selector: 'np-accordion-item',
  templateUrl: './np-accordion-item.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpAccordionItemComponent implements OnInit, OnDestroy {
  static controlCount = 1;

  @Input() title: string | TemplateRef<any>;
  @Input() isOpen = false;
  @Input() height: number;
  @Input() disabled: boolean;
  @Input() iconCss: string;
  @Input() styleClass: string;
  @Input() inputId = `np-accordion-item_${NpAccordionItemComponent.controlCount++}`;

  @Output() _onExpand: EventEmitter<any> = new EventEmitter();
  @Output() _onCollapse: EventEmitter<any> = new EventEmitter();

  isTitleTemplate: boolean;

  @ContentChild(NpAccordionContent, { read: TemplateRef, static: true }) _explicitContent: TemplateRef<any>;
  private _contentPortal: TemplatePortal | null = null;
  get content(): TemplatePortal | null {
    return this._contentPortal;
  }

  constructor(private _viewContainerRef: ViewContainerRef) {
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

  _expand() {
    if (this.disabled) {
      return;
    }
    this.isOpen = true;
    if (!this._contentPortal && this._explicitContent) {
      this._contentPortal = new TemplatePortal(this._explicitContent, this._viewContainerRef);
    }
    this._onExpand.emit(this);
  }

  _collapse() {
    if (this.disabled) {
      return;
    }
    this.isOpen = false;
    this._onCollapse.emit(this);
  }

  _toggle() {
    if (this.disabled) {
      return;
    }
    if (this.isOpen) {
      this._collapse();
      return;
    }
    this._expand();
  }

  ngOnDestroy(): void {
    if (this._contentPortal && this._contentPortal.isAttached) {
      this._contentPortal.detach();
    }
  }

}
