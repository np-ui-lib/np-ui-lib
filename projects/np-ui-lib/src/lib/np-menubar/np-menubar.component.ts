import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { NpMenuItem } from './np-menu.model';
import { Router } from '@angular/router';

@Component({
  selector: 'np-menubar',
  templateUrl: './np-menubar.component.html',
  styleUrls: ['./np-menubar.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpMenubarComponent {
  static controlCount = 1;

  @Input() items: NpMenuItem[];
  @Input() styleClass: string;
  @Input() isPanelMenu: boolean;
  @Input() orientation = 'vertical';
  @Input() inputId = `np-menubar_${NpMenubarComponent.controlCount++}`;
  @Output() _onCloseMenu: EventEmitter<any> = new EventEmitter();
  @Output() onClickMenuItem: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {
  }

  _onMouseEnter($event, item: NpMenuItem) {
    if (this.orientation === 'vertical') {
      item.x = $event.target.offsetWidth;
      item.y = 0;
    }
    else {
      item.x = 0;
      item.y = $event.target.offsetHeight;
    }
    item.isItemsVisible = true;
  }

  _onClickPanelMenu(item: NpMenuItem) {
    item.isItemsVisible = !item.isItemsVisible;
  }

  _onMouseLeave(item: NpMenuItem) {
    item.isItemsVisible = false;
  }

  _onClickMenu(item: NpMenuItem) {
    this.onClickMenuItem.emit(item);
    this._onCloseMenu.emit();
  }

  _closeParentMenu() {
    this.items.forEach(element => {
      element.isItemsVisible = false;
    });
    this._onCloseMenu.emit();
  }

  _isActive(item: NpMenuItem) {
    return this.router.isActive(item.routerLink, false);
  }

  _onClickMenuItem(item: NpMenuItem) {
    this.onClickMenuItem.emit(item);
  }
}
