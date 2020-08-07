import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { NpUtilityService } from '../np-utility/np-utility.service';

@Component({
  selector: 'np-list',
  templateUrl: './np-list.component.html',
  styleUrls: ['./np-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpListComponent implements OnInit {
  static controlCount = 1;

  @Input() items: any[];
  @Input() itemTemplate: TemplateRef<any>;
  @Input() allowSelection = false;
  @Input() height: number;
  @Input() orderBy: string;
  @Input() orderDir: string;
  @Input() styleClass: string;
  @Input() inputId = `np-list_${NpListComponent.controlCount++}`;

  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  @Output() onDeselect: EventEmitter<any> = new EventEmitter();

  selectedItems: any[] = [];

  constructor(private utility: NpUtilityService) { }

  ngOnInit(): void {
  }

  clear() {
    this.selectedItems = [];
  }

  getSelectedItems() {
    return this.selectedItems;
  }

  _onSelectItem(item: any, event: any) {
    if (event.target.checked) {
      this.selectedItems.push(item);
      this.onSelect.emit(item);
    } else {
      const idx = this.selectedItems.indexOf(item);
      this.selectedItems.splice(idx, 1);
      this.onDeselect.emit(item);
    }
  }

  _isSelected(item) {
    return this._getSelectedIndexOfItem(item) > -1;
  }

  _getSelectedIndexOfItem(item: any) {
    const that = this;
    return this.selectedItems.findIndex((element) => {
      if (that.utility.isEqual(element, item)) {
        return item;
      }
    });
  }

  selectAll() {
    const items = [];
    this.items.forEach((element) => {
      items.push(element);
    });
    this.selectedItems = items;
  }

  selectItem(item: any) {
    if (!this._isSelected(item)) {
      this.selectedItems.push(item);
    }
  }

  selectItemByIndex(idx: number) {
    const item = this.items[idx];
    this.selectItem(item);
  }

  deselectItem(item: any) {
    const idx = this._getSelectedIndexOfItem(item);
    if (idx > -1) {
      this.selectedItems.splice(idx, 1);
    }
  }

  deselectItemByIndex(idx: number) {
    const item = this.items[idx];
    this.deselectItem(item);
  }

  setSelectedItems(items: any[]) {
    this.selectedItems = items;
  }

}
