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
  @Input() allowSelection: boolean;
  @Input() styleClass: string;
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
      this._setExpand(element);
    });
    this.onExpandAll.emit();
  }

  collapseAll() {
    this.items.forEach(element => {
      this._setCollapse(element);
    });
    this.onCollapseAll.emit();
  }

  _setExpand(item: NpTreeViewItem) {
    item.isExpanded = true;
    if (item.items) {
      item.items.forEach(element => {
        this._setExpand(element);
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
    item.isSelected = true;
    if (item.items && item.items.length > 0) {
      item.items.forEach(element => {
        this._selectItemAndChild(element);
      });
    }
    this.items.forEach(element => {
      this._checkIsAllChildNodesSelected(element);
    });
  }

  _deSelectItemAndChild(item: NpTreeViewItem) {
    item.isSelected = false;
    if (item.items && item.items.length > 0) {
      item.items.forEach(element => {
        this._deSelectItemAndChild(element);
      });
    }
    this.items.forEach(element => {
      this._checkIsAllChildNodesSelected(element);
    });
  }

  _checkIsAllChildNodesSelected(item: NpTreeViewItem) {
    if (item.items && item.items.length > 0) {
      let allSelected = true;
      item.items.forEach((element) => {
        if (element.items && element.items.length > 0) {
          this._checkIsAllChildNodesSelected(element);
        }
        if (!element.isSelected) {
          allSelected = false;
        }
      });
      item.isSelected = allSelected;
    }
  }

  _isIndeterminate(item: NpTreeViewItem) {
    let indeterminate = false;
    if (item.items) {
      let isAnySelected = false;
      item.items.forEach((element) => {
        if (isAnySelected) {
          return;
        }
        if (element.isSelected) {
          isAnySelected = true;
          return;
        }
        if (element.items) {
          if (this._isIndeterminate(element)) {
            isAnySelected = true;
          }
        }
      });
      if (isAnySelected) {
        indeterminate = true;
      }
    }
    return indeterminate;
  }

  getSelectedItems() {
    const selected = [];
    this.items.forEach(element => {
      this._getSelected(element, selected);
    });
    return selected;
  }

  _getSelected(item: NpTreeViewItem, selected: NpTreeViewItem[]) {
    if (item.isSelected) {
      selected.push(item);
    }
    if (item.items) {
      item.items.forEach(element => {
        this._getSelected(element, selected);
      });
    }
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
}
