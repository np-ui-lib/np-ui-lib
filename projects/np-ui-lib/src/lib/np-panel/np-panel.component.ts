import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, TemplateRef, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'np-panel',
  templateUrl: './np-panel.component.html',
  styleUrls: ['./np-panel.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpPanelComponent implements OnInit {
  static controlCount = 1;

  @Input() inputId = `np-panel_${NpPanelComponent.controlCount++}`;
  @Input() title: string | TemplateRef<any>;
  @Input() allowToMinimize: boolean;
  @Input() isOpen = true;
  @Input() allowToZoom: boolean;
  @Input() allowToClose: boolean;
  @Input() styleClass: string;
  @Input() height: number;
  @Input() disabled: boolean;

  @Output() onExpand: EventEmitter<any> = new EventEmitter();
  @Output() onCollapse: EventEmitter<any> = new EventEmitter();


  isTitleTemplate: boolean;
  isZoom = false;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    if (this.title instanceof TemplateRef) {
      this.isTitleTemplate = true;
    }
  }

  _toggleMinimize() {
    if (this.isOpen) {
      this._collapse();
    } else {
      this._expand();
    }
  }

  _expand() {
    if (!this.allowToMinimize || this.disabled) {
      return;
    }
    this.isOpen = true;
    this.onExpand.emit(this);
  }

  _collapse() {
    if (!this.allowToMinimize || this.disabled) {
      return;
    }
    this.isOpen = false;
    this.onCollapse.emit(this);
  }

  _toggleZoom() {
    if (this.disabled) {
      return;
    }
    this.isZoom = !this.isZoom;
    if (this.isZoom === true) {
      this.isOpen = true;
    }
  }

  _close() {
    if (this.disabled) {
      return;
    }
    this.el.nativeElement.remove();
  }
}
