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
  static controlCount = 1;

  @ContentChildren(NpPanelComponent) panels: QueryList<NpPanelComponent>;

  @Input() defaultOpenIndex: number;
  @Input() allowMultipleOpen = true;
  @Input() styleClass: string;
  @Input() inputId = `np-accordion_${NpAccordionComponent.controlCount++}`;

  ngAfterContentInit(): void {
    this.panels.toArray().forEach(panel => {
      panel.isOpen = this.allowMultipleOpen ? panel.isOpen : false;
      panel.allowToMinimize = true;
      panel.allowToClose = false;
      panel.allowToZoom = false;
      panel.onExpand.subscribe((pan: NpPanelComponent) => {
        if (!this.allowMultipleOpen) {
          this.panels.toArray().forEach(element => {
            if (element.inputId !== pan.inputId) {
              element._collapse();
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
    this.panels.toArray()[idx]._expand();
  }

  expandById(id: string) {
    this.panels.find(item => { if (item.inputId === id) { return true; } })._expand();
  }
}
