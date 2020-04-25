import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NpMenuItem } from './np-menu.model';

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
  /**orientation of menu, valid values are horizontal and vertical. Default is vertical. */
  @Input() orientation: string = "vertical";

  constructor() {
  }

  onMouseEnter($event, item: NpMenuItem) {
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

  onMouseLeave(item: NpMenuItem) {
    item._isItemsVisible = false;
  }
}
