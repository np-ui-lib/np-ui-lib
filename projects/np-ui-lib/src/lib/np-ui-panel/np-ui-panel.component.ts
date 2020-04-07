import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'np-ui-panel',
  templateUrl: './np-ui-panel.component.html',
  styleUrls: ['./np-ui-panel.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpUiPanelComponent {

  @Input() title: string;

  @Input() allowMinimize: boolean;
  _isMinimize: boolean = false;

  @Input() allowZoom: boolean;
  _isZoom: boolean = false;

  @Input() allowRemove: boolean;
  _isClose: boolean = false;

  @Input() styleClass: string;

  @Input() height: number;

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
