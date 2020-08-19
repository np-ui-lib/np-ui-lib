import { Component, Input, TemplateRef, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter, AfterContentInit } from '@angular/core';

@Component({
  selector: 'np-accordion-item',
  templateUrl: './np-accordion-item.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpAccordionItemComponent implements AfterContentInit {
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

  constructor() { }

  ngAfterContentInit(): void {
    if (this.title instanceof TemplateRef) {
      this.isTitleTemplate = true;
    }
  }

  _expand() {
    if (this.disabled) {
      return;
    }
    this.isOpen = true;
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

}
