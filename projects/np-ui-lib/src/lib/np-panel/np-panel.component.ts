import {
  Component, ViewEncapsulation, ChangeDetectionStrategy, Input, TemplateRef,
  Output, EventEmitter, ElementRef, AfterContentInit
} from '@angular/core';

@Component({
  selector: 'np-panel',
  templateUrl: './np-panel.component.html',
  styleUrls: ['./np-panel.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpPanelComponent implements AfterContentInit {
  static controlCount = 1;

  @Input() title: string | TemplateRef<any>;
  @Input() allowToMinimize: boolean;
  @Input() allowToZoom: boolean;
  @Input() allowToClose: boolean;
  @Input() isOpen = true;
  @Input() height: number;
  @Input() disabled: boolean;
  @Input() styleClass: string;
  @Input() inputId = `np-panel_${NpPanelComponent.controlCount++}`;

  @Output() onExpand: EventEmitter<any> = new EventEmitter();
  @Output() onCollapse: EventEmitter<any> = new EventEmitter();

  isTitleTemplate: boolean;
  isZoom = false;

  constructor(private el: ElementRef) {
  }
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
    this.onExpand.emit(this);
  }

  _collapse() {
    if (this.disabled) {
      return;
    }
    this.isOpen = false;
    this.onCollapse.emit(this);
  }

  _zoomIn() {
    if (this.disabled) {
      return;
    }
    this._expand();
    this.isZoom = true;
  }

  _zoomOut() {
    if (this.disabled) {
      return;
    }
    this.isZoom = false;
  }

  _close() {
    if (this.disabled) {
      return;
    }
    this.el.nativeElement.remove();
  }
}
