import {
  Component, ViewEncapsulation, ChangeDetectionStrategy, AfterContentInit,
  OnDestroy, ContentChildren, QueryList, Input, Output, EventEmitter
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NpAccordionItemComponent } from './np-accordion-item/np-accordion-item.component';

@Component({
  selector: 'np-accordion',
  templateUrl: './np-accordion.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpAccordionComponent implements AfterContentInit, OnDestroy {

  private static controlCount = 1;

  @Input() defaultOpenIndex: number;
  @Input() allowMultipleOpen = true;
  @Input() styleClass: string;
  @Input() inputId = `np-accordion_${NpAccordionComponent.controlCount++}`;

  @Output() onExpand: EventEmitter<any> = new EventEmitter();
  @Output() onCollapse: EventEmitter<any> = new EventEmitter();

  @ContentChildren(NpAccordionItemComponent) items: QueryList<NpAccordionItemComponent>;

  private subscriptions: Subscription[] = [];

  ngAfterContentInit(): void {
    if (this.defaultOpenIndex >= 0) {
      this.expandByIndex(this.defaultOpenIndex);
    }
    this.items.toArray().forEach(element => {
      this.subscriptions.push(element._onExpand.subscribe((item) => { this._onExpand(item); }));
      this.subscriptions.push(element._onCollapse.subscribe((item) => { this._onCollapse(item); }));
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(element => { element.unsubscribe(); });
  }

  expandByIndex(idx: number) {
    this.items.toArray()[idx]._expand();
  }

  expandById(id: string) {
    this.items.toArray().find(item => { if (item.inputId === id) { return true; } })._expand();
  }

  collapseByIndex(idx: number) {
    this.items.toArray()[idx]._collapse();
  }

  collapseById(id: string) {
    this.items.toArray().find(item => { if (item.inputId === id) { return true; } })._collapse();
  }

  _onExpand(item: NpAccordionItemComponent) {
    if (!this.allowMultipleOpen) {
      this.items.toArray().forEach(element => {
        if (item.inputId !== element.inputId && element.isOpen) {
          element._collapse();
        }
      });
    }
    this.onExpand.emit(item);
  }

  _onCollapse(item: NpAccordionItemComponent) {
    this.onCollapse.emit(item);
  }
}
