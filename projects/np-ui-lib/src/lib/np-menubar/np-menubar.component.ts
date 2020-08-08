import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter, AfterContentInit, OnDestroy } from '@angular/core';
import { NpMenuItem } from './np-menu.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'np-menubar',
  templateUrl: './np-menubar.component.html',
  styleUrls: ['./np-menubar.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpMenubarComponent implements AfterContentInit, OnDestroy {
  static controlCount = 1;

  @Input() items: NpMenuItem[];
  @Input() orientation = 'vertical';
  @Input() isPanelMenu: boolean;
  @Input() styleClass: string;
  @Input() inputId = `np-menubar_${NpMenubarComponent.controlCount++}`;

  subscription: Subscription;

  @Output() onClickMenuItem: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngAfterContentInit(): void {
    if (!this.isPanelMenu) {
      this.subscription = this.onClickMenuItem.subscribe(() => {
        this.items.forEach(element => {
          if (element.items) {
            this._collapseMenu(element);
          }
        });
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  _collapseMenu(item: NpMenuItem) {
    item.items.forEach(element => {
      if (element.items) {
        this._collapseMenu(element);
      }
    });
    item.isChildVisible = false;
  }

  _onClickMenuItem(item: NpMenuItem) {
    this.onClickMenuItem.emit(item);
  }
}
