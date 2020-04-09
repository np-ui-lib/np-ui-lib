import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'np-ui-panel',
  templateUrl: './np-ui-panel.component.html',
  styleUrls: ['./np-ui-panel.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpUiPanelComponent implements OnInit {

  @Input() title: string | TemplateRef<any>;
  _isTitleTemplate: boolean;

  @Input() allowMinimize: boolean;
  _isMinimize: boolean = false;

  @Input() allowZoom: boolean;
  _isZoom: boolean = false;

  @Input() allowRemove: boolean;
  _isClose: boolean = false;

  @Input() styleClass: string;

  @Input() height: number;

  ngOnInit(): void {
    if (this.title instanceof TemplateRef) {
      this._isTitleTemplate = true;
    }
  }

  _toggleMinimize() {
    this._isMinimize = !this._isMinimize;
  }

  _toggleZoom() {
    this._isZoom = !this._isZoom;
    if (this._isZoom == true) {
      this._isMinimize = false;
    }
  }

  _close() {
    this._isClose = true;
  }
}
