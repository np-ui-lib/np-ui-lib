import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, TemplateRef, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'np-ui-panel',
  templateUrl: './np-ui-panel.component.html',
  styleUrls: ['./np-ui-panel.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpUiPanelComponent implements OnInit {

  @Input() id: string;

  @Input() title: string | TemplateRef<any>;
  _isTitleTemplate: boolean;

  @Input() allowToMinimize: boolean;
  @Input() isOpen: boolean = true;

  @Input() allowToZoom: boolean;
  _isZoom: boolean = false;

  @Input() allowToClose: boolean;

  @Input() styleClass: string;

  @Input() height: number;

  @Output() _onOpen: EventEmitter<any> = new EventEmitter();

  @Input() disabled: boolean;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    if (this.title instanceof TemplateRef) {
      this._isTitleTemplate = true;
    }
  }

  _toggleMinimize() {
    if (!this.allowToMinimize || this.disabled) {
      return;
    }
    this.isOpen = !this.isOpen;
    if (this._onOpen && this.isOpen) {
      this._onOpen.emit(this);
    }
  }

  _toggleZoom() {
    if (this.disabled) {
      return;
    }
    this._isZoom = !this._isZoom;
    if (this._isZoom == true) {
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
