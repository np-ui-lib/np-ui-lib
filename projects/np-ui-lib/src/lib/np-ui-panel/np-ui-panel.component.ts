import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'np-ui-panel',
  templateUrl: './np-ui-panel.component.html',
  styleUrls: ['./np-ui-panel.component.css']
})
export class NpUiPanelComponent implements OnInit {

  @Input() title: string;

  @Input() allowMinimize: boolean;
  _isMinimize: boolean = false;

  @Input() allowZoom: boolean;
  _isZoom: boolean = false;

  @Input() allowClose: boolean;
  _isClose: boolean = false;

  @Input() styleClass: string;

  @Input() bodyHeight: number;

  constructor() { }

  ngOnInit(): void {
  }

  _toggleMinimize() {
    this._isMinimize = !this._isMinimize
  }

  _toggleZoom() {
    this._isZoom = !this._isZoom
  }

  _close() {
    this._isClose = true;
  }
}
