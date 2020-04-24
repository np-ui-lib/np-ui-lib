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
  _isHeaderTemplate: boolean;
  _isBodyTemplate: boolean;
  @Input() width: number;
  @Input() styleClass: string;

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
