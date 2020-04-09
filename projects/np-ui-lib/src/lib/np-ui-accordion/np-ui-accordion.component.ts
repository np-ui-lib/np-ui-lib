import { Component, ViewEncapsulation, ChangeDetectionStrategy, ContentChildren, QueryList, AfterContentInit, EventEmitter, Input } from '@angular/core';
import { NpUiPanelComponent } from '../np-ui-panel/np-ui-panel.component';

@Component({
  selector: 'np-ui-accordion',
  templateUrl: './np-ui-accordion.component.html',
  styleUrls: ['./np-ui-accordion.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpUiAccordionComponent implements AfterContentInit {

  @ContentChildren(NpUiPanelComponent) _panels: QueryList<NpUiPanelComponent>;

  @Input() defaultOpenIndex: number;

  constructor() { }

  ngAfterContentInit(): void {
    this._panels.toArray().forEach(panel => {
      panel._isMinimize = true;
      panel.allowMinimize = true;
      panel.allowRemove = false;
      panel.allowZoom = false;
      panel._onOpen.subscribe((_p: NpUiPanelComponent) => {
        this._onOpenPanel(_p);
      });
    });
    if (this.defaultOpenIndex != undefined && this.defaultOpenIndex != null && this.defaultOpenIndex >= 0) {
      this.openByIndex(this.defaultOpenIndex);
    }
  }

  _onOpenPanel(panel: NpUiPanelComponent) {
    panel._isMinimize = false;
    this._panels.toArray().forEach(_p => {
      if (_p.title != panel.title) {
        _p._isMinimize = true;
      }
    });
  }

  openByIndex(idx: number) {
    var panel = this._panels.toArray()[idx];
    this._onOpenPanel(panel);
  }

}
