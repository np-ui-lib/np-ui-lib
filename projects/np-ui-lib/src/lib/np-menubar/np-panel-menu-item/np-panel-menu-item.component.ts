import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from "@angular/core";
import { NpMenuItem } from "../np-menu.model";
import { Router } from "@angular/router";

@Component({
  selector: "np-panel-menu-item",
  templateUrl: "./np-panel-menu-item.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpPanelMenuItemComponent {
  @Input() item: NpMenuItem;

  @Output() onClickItem: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  _onClickMenuItem(menuItem: NpMenuItem) {
    this.onClickItem.emit(menuItem);
  }

  _isActive(menuItem: NpMenuItem) {
    if (!menuItem.routerLink) {
      return false;
    }
    return this.router.isActive(menuItem.routerLink, false);
  }

  _onClickPanelMenu(menuItem: NpMenuItem) {
    menuItem.isChildVisible = !menuItem.isChildVisible;
  }
}
