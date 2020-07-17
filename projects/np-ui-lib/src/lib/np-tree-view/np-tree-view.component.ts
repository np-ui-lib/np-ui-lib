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
  static controlCount = 1;

  @Input() items: NpTreeViewItem[];
  @Input() styleClass: string;
  @Input() allowSelection: boolean;
  @Input() inputId = `np-treeview_${NpTreeViewComponent.controlCount++}`;

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
    if (item.items && item.items.length > 0) {
      item.items.forEach(element => {
        this._selectItemAndChild(element);
      });
    } else {
      item.isSelected = true;
    }
  }

  _deSelectItemAndChild(item: NpTreeViewItem) {
    if (item.items && item.items.length > 0) {
      item.items.forEach(element => {
        this._deSelectItemAndChild(element);
      });
    } else {
      item.isSelected = false;
    }
  }

  _isSelected(item: NpTreeViewItem) {
    if (item.items && item.items.length > 0) {
      return this._isAllChildSelected(item);
    } else {
      return item.isSelected;
    }
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

  _isAllChildSelected(item: NpTreeViewItem) {
    let isSelected = true;
    if (item.items && item.items.length > 0) {
      item.items.forEach(element => {
        if (element.items) {
          const isChildSelected = this._isAllChildSelected(element);
          if (isChildSelected === false) {
            isSelected = false;
          }
        } else {
          if (!element.isSelected) {
            isSelected = false;
          }
        }
      });
    } else {
      isSelected = false;
    }
    return isSelected;
  }

  getSelectedItems() {
    const selected = [];
    this.items.forEach(element => {
      this._getSelected(element, selected);
    });
    return selected;
  }

  removeAllSelected() {
    this.items.forEach(element => {
      this._deSelectItemAndChild(element);
    });
  }

  setAllSelected() {
    this.items.forEach(element => {
      this._selectItemAndChild(element);
    });
  }

  _isIndeterminate(item: NpTreeViewItem) {
    if (this._isSelected(item)) {
      return false;
    }
    if (item.items) {
      return this._isAnyChildSelected(item);
    }
    return false;
  }

  _isAnyChildSelected(item: NpTreeViewItem) {
    let isAnySelected = false;
    if (item.items && item.items.length > 0) {
      item.items.forEach(element => {
        if (isAnySelected) {
          return;
        }
        if (element.items) {
          if (this._isAnyChildSelected(element)) {
            isAnySelected = true;
          }
        } else {
          if (element.isSelected) {
            isAnySelected = true;
          }
        }
      });
    }
    return isAnySelected;
  }

}
