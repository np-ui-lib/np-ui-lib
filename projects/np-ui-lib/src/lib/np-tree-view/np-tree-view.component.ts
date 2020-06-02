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
  @Input() allowSelection: boolean;

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  @Output() onDeselect: EventEmitter<any> = new EventEmitter();
  @Output() onExpand: EventEmitter<any> = new EventEmitter();
  @Output() onCollapse: EventEmitter<any> = new EventEmitter();
  @Output() onExpandAll: EventEmitter<any> = new EventEmitter();
  @Output() onCollapseAll: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  _toggleNode(item: NpTreeViewItem) {
    item.isExpanded = !item.isExpanded;
    if (item.isExpanded) {
      this.onExpand.emit(item);
    } else {
      this.onCollapse.emit(item);
    }
  }

  expandAll() {
    this.items.forEach(element => {
      this._setExapnd(element);
    });
    this.onExpandAll.emit();
  }

  collaseAll() {
    this.items.forEach(element => {
      this._setCollapse(element);
    });
    this.onCollapseAll.emit();
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
      this.onSelect.emit(item);
    } else {
      this._deSelectItemAndChild(item);
      this.onDeselect.emit(item);
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
      if (element.items) {
        var isChildSelected = this.isAllChildSelected(element);
        if (isChildSelected == false) {
          isSelected = false;
        }
      } else {
        if (!element.isSelected) {
          isSelected = false;
        }
      }
    });
    return isSelected;
  }

}
