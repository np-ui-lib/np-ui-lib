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

  @Input() items: any[];
  @Input() itemTemplate: TemplateRef<any>;
  @Input() allowSelection: boolean = false;
  @Input() styleClass: string;
  @Input() height: number;
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  @Output() onDeselect: EventEmitter<any> = new EventEmitter();

  _selectedItems: any[] = [];

  constructor(private utility: NpUtilityService) { }

  ngOnInit(): void {
  }

  clear() {
    this._selectedItems = [];
  }

  getSelectedItems() {
    return this._selectedItems;
  }

  _onSelectItem(item: any, event: any) {
    if (event.target.checked) {
      this._selectedItems.push(item);
      this.onSelect.emit(item);
    } else {
      var idx = this._selectedItems.indexOf(item);
      this._selectedItems.splice(idx, 1);
      this.onDeselect.emit(item);
    }
  }

  _isSelected(item) {
    return this._getSelectedIndexOfItem(item) > -1;
  }

  _getSelectedIndexOfItem(item: any) {
    var that = this;
    return this._selectedItems.findIndex(function (element) {
      if (that.utility.isEqual(element, item)) {
        return item;
      }
    });
  }

  selectAll() {
    var items = [];
    this.items.forEach(function (element) {
      items.push(element);
    });
    this._selectedItems = items;
  }

  selectItem(item: any) {
    if (!this._isSelected(item)) {
      this._selectedItems.push(item);
    }
  }

  selectItemByIndex(idx: number) {
    var item = this.items[idx];
    this.selectItem(item);
  }

  deselectItem(item: any) {
    var idx = this._getSelectedIndexOfItem(item);
    if (idx > -1) {
      this._selectedItems.splice(idx, 1);
    }
  }

  deselectItemByIndex(idx: number) {
    var item = this.items[idx];
    this.deselectItem(item);
  }

  setSelectedItems(items: any[]) {
    this._selectedItems = items;
  }

}
