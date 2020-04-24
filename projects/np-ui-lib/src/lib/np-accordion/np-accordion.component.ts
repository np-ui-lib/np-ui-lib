import { Component, ViewEncapsulation, ChangeDetectionStrategy, ContentChildren, QueryList, AfterContentInit, EventEmitter, Input } from '@angular/core';
import { NpPanelComponent } from '../np-panel/np-panel.component';

@Component({
  selector: 'np-accordion',
  templateUrl: './np-accordion.component.html',
  styleUrls: ['./np-accordion.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpAccordionComponent implements AfterContentInit {

  @ContentChildren(NpPanelComponent) _panels: QueryList<NpPanelComponent>;

  @Input() defaultOpenIndex: number;
  @Input() singleOpenAtOnce: boolean;
  @Input() styleClass: string;

  ngAfterContentInit(): void {
    this._panels.toArray().forEach(panel => {
      panel.isOpen = false;
      panel.allowToMinimize = true;
      panel.allowToClose = false;
      panel.allowToZoom = false;
      panel._onOpen.subscribe((_p: NpPanelComponent) => {
        this._onOpenPanel(_p);
      });
    });
    if (this.defaultOpenIndex >= 0) {
      this.expandByIndex(this.defaultOpenIndex);
    }
  }

  _onOpenPanel(panel: NpPanelComponent) {
    if (panel.disabled) {
      return;
    }
    panel.isOpen = true;
    if (this.singleOpenAtOnce) {
      this._panels.toArray().forEach(_p => {
        if (_p.id != panel.id) {
          _p.isOpen = false;
        }
      });
    }
  }

  expandByIndex(idx: number) {
    var panel = this._panels.toArray()[idx];
    this._onOpenPanel(panel);
  }

  expandById(id: string) {
    var panel = this._panels.find(function (item) { if (item.id === id) { return true; } });
    this._onOpenPanel(panel);
  }

}
