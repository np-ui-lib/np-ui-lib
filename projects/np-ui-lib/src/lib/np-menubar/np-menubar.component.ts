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

  @Input() items: NpMenuItem[];
  @Input() styleClass: string;
  @Input() isPanelMenu: boolean;

  /**orientation of menu, valid values are horizontal and vertical. Default is vertical. */
  @Input() orientation: string = "vertical";
  @Output() _onCloseMenu: EventEmitter<any> = new EventEmitter();
  @Output() onClickMenuItem: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {
  }

  _onMouseEnter($event, item: NpMenuItem) {
    if (this.orientation === "vertical") {
      item._x = $event.target.offsetWidth;
      item._y = 0;
    }
    else {
      item._x = 0;
      item._y = $event.target.offsetHeight;
    }
    item._isItemsVisible = true;
  }

  _onClickPanelMenu(item: NpMenuItem) {
    item._isItemsVisible = !item._isItemsVisible;
  }

  _onMouseLeave(item: NpMenuItem) {
    item._isItemsVisible = false;
  }

  _onClickMenu(item: NpMenuItem) {
    this.onClickMenuItem.emit(item);
    this._onCloseMenu.emit();
  }

  _closeParentMenu() {
    this.items.forEach(element => {
      element._isItemsVisible = false;
    });
    this._onCloseMenu.emit();
  }

  _isActive(item: NpMenuItem) {
    return this.router.isActive(item.routerLink, false);
  }

  _onClickMenuItem(item: NpMenuItem) {
    this.onClickMenuItem.emit(item)
  }
}
