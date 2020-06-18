import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ContentChild, Input, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'np-popover',
  templateUrl: './np-popover.component.html',
  styleUrls: ['./np-popover.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpPopoverComponent implements OnInit {

  @Input() header: string | TemplateRef<any>;
  @Input() body: string | TemplateRef<any>;
  @Input() width: number;
  @Input() styleClass: string;
  static controlCount = 1;
  @Input() inputId: string = `np-popover_${NpPopoverComponent.controlCount++}`;

  _isHeaderTemplate: boolean;
  _isBodyTemplate: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.header instanceof TemplateRef) {
      this._isHeaderTemplate = true;
    }
    if (this.body instanceof TemplateRef) {
      this._isBodyTemplate = true;
    }
  }
}
