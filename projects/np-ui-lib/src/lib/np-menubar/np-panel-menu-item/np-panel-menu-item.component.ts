import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NpMenuItem } from '../np-menu.model';
import { Router } from '@angular/router';

@Component({
  selector: 'np-panel-menu-item',
  templateUrl: './np-panel-menu-item.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default

})
export class NpPanelMenuItemComponent implements OnInit {

  @Input() item: NpMenuItem;

  @Output() onClickItem: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  _onClickMenuItem(item: NpMenuItem) {
    this.onClickItem.emit(item);
  }

  _isActive(item: NpMenuItem) {
    return this.router.isActive(item.routerLink, false);
  }

  _onClickPanelMenu(item: NpMenuItem) {
    item.isChildVisible = !item.isChildVisible;
  }
}
