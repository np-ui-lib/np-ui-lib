import { Component, ViewEncapsulation, ChangeDetectionStrategy, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
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
  @Input() allowMultipleOpen: boolean = true;
  @Input() styleClass: string;
  static controlCount = 1;
  @Input() inputId: string = `np-accordion_${NpAccordionComponent.controlCount++}`;

  ngAfterContentInit(): void {
    this._panels.toArray().forEach(panel => {
      panel.isOpen = this.allowMultipleOpen ? panel.isOpen : false;
      panel.allowToMinimize = true;
      panel.allowToClose = false;
      panel.allowToZoom = false;
      panel.onExpand.subscribe((_p: NpPanelComponent) => {
        if (!this.allowMultipleOpen) {
          this._panels.toArray().forEach(_p => {
            if (_p.inputId != panel.inputId) {
              _p._collapse();
            }
          });
        }
      });
    });
    if (this.defaultOpenIndex >= 0) {
      this.expandByIndex(this.defaultOpenIndex);
    }
  }

  expandByIndex(idx: number) {
    var panel = this._panels.toArray()[idx];
    panel._expand();
  }

  expandById(id: string) {
    var panel = this._panels.find(function (item) { if (item.inputId === id) { return true; } });
    panel._expand();
  }
}
