import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NpTreeViewItem } from './np-tree-view.model';

@Component({
  selector: 'np-tree-view',
  templateUrl: './np-tree-view.component.html',
  styleUrls: ['./np-tree-view.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpTreeViewComponent implements OnInit {

  @Input() items: NpTreeViewItem[];
  @Input() styleClass: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  @Input() allowSelection: boolean;
  _selectedItems: NpTreeViewItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  _toggleNode(item: NpTreeViewItem) {
    item.isExpanded = !item.isExpanded;
  }

  expandAll() {
    this.items.forEach(element => {
      this._setExapnd(element);
    });
  }

  collaseAll() {
    this.items.forEach(element => {
      this._setCollapse(element);
    });
  }

  _setExapnd(item: NpTreeViewItem) {
    item.isExpanded = true;
    if (item.items) {
      item.items.forEach(element => {
        this._setExapnd(element);
      });
    }
  }

  _setCollapse(item: NpTreeViewItem) {
    item.isExpanded = false;
    if (item.items) {
      item.items.forEach(element => {
        this._setCollapse(element);
      });
    }
  }

  _onClick(item: NpTreeViewItem) {
    this.onClick.emit(item);
  }

  _onSelect(event, item: NpTreeViewItem) {
    if (event.target.checked) {
      this._selectItemAndChild(item);
    } else {
      this._deSelectItemAndChild(item);
    }
  }

  _selectItemAndChild(item: NpTreeViewItem) {
    if (item.items) {
      item.items.forEach(element => {
        this._selectItemAndChild(element);
      });
    } else {
      item.isSelected = true;
    }
  }

  _deSelectItemAndChild(item: NpTreeViewItem) {
    if (item.items) {
      item.items.forEach(element => {
        this._deSelectItemAndChild(element);
      });
    } else {
      item.isSelected = false;
    }
  }

  _isSelected(item: NpTreeViewItem) {
    if (item.items) {
      return this.isAllChildSelected(item);
    } else {
      return item.isSelected;
    }
  }

  getSelectedItems() {
    var selected = [];
    this.items.forEach(element => {
      this._getSelected(element, selected);
    });
    return selected;
  }

  _getSelected(item: NpTreeViewItem, selected: NpTreeViewItem[]) {
    if (item.items) {
      item.items.forEach(element => {
        this._getSelected(element, selected);
      });
    } else {
      if (item.isSelected) {
        selected.push(item);
      }
    }
  }

  removeAllSelected() {
    this.items.forEach(element => {
      this._deSelectItemAndChild(element);
    });
  }

  isAllChildSelected(item: NpTreeViewItem) {
    var isSelected = true;
    item.items.forEach(element => {
      if (!element.isSelected) {
        isSelected = false;
      }
    });
    return isSelected;
  }

}
