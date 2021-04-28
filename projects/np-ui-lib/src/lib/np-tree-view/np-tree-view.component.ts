import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  TemplateRef,
} from "@angular/core";
import { NpTreeViewItem } from "./np-tree-view.model";

@Component({
  selector: "np-tree-view",
  templateUrl: "./np-tree-view.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpTreeViewComponent implements OnChanges {
  private static controlCount = 1;

  @Input() items: NpTreeViewItem[];
  @Input() itemTemplate: TemplateRef<any>;
  /* Selection mode can be single or multiple */
  @Input() selectionMode: string;
  @Input() selection: any[];
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();
  @Input() styleClass: string;
  @Input() inputId = `np-treeview_${NpTreeViewComponent.controlCount++}`;

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() onExpand: EventEmitter<any> = new EventEmitter();
  @Output() onCollapse: EventEmitter<any> = new EventEmitter();
  @Output() onExpandAll: EventEmitter<any> = new EventEmitter();
  @Output() onCollapseAll: EventEmitter<any> = new EventEmitter();
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  @Output() onDeselect: EventEmitter<any> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selection) {
      this._syncSelectionForAll();
    }
  }

  expandAll() {
    this.items.forEach((element) => {
      this._expandAllInNode(element);
    });
    this.onExpandAll.emit();
  }

  collapseAll() {
    this.items.forEach((element) => {
      this._collapseAllInNode(element);
    });
    this.onCollapseAll.emit();
  }

  selectAll() {
    if (this._isSingleSelectionMode()) {
      return;
    }
    this.selection = [];
    this.items.forEach((element) => {
      this._selectAll(element);
    });
    this._syncSelectionForAll();
    this.selectionChange.emit(this.selection);
  }

  deselectAll() {
    if (this._isSingleSelectionMode()) {
      return;
    }
    this.selection = [];
    this._syncSelectionForAll();
    this.selectionChange.emit(this.selection);
  }

  _toggle(item: NpTreeViewItem) {
    if (item.isExpanded) {
      item.isExpanded = false;
      this.onCollapse.emit(item);
      return;
    }
    item.isExpanded = true;
    this.onExpand.emit(item);
  }

  _expandAllInNode(item: NpTreeViewItem) {
    item.isExpanded = true;
    if (item.childItems) {
      item.childItems.forEach((element) => {
        this._expandAllInNode(element);
      });
    }
  }

  _collapseAllInNode(item: NpTreeViewItem) {
    item.isExpanded = false;
    if (item.childItems) {
      item.childItems.forEach((element) => {
        this._collapseAllInNode(element);
      });
    }
  }

  _onClick(item: NpTreeViewItem) {
    this.onClick.emit(item);
  }

  _changeSelection(checked: any, item: NpTreeViewItem) {
    if (!item.id) {
      throw new Error("NpTreeViewItem.id must be defined for selection");
    }
    if (checked) {
      this._selectNode(item);
    } else {
      this._deselectNode(item);
    }
    this._syncSelectionForAll();
    if (checked) {
      this.onSelect.emit(item);
    } else {
      this.onDeselect.emit(item);
    }
  }

  _selectNode(item: NpTreeViewItem) {
    if (this._isSingleSelectionMode()) {
      this.selection = [item];
    } else {
      if (!this.selection) {
        this.selection = [];
      }
      this.selection.push(item);
      this._selectChildNodes(item);
    }
    this.selectionChange.emit(this.selection);
  }

  _selectChildNodes(item: NpTreeViewItem) {
    if (item.childItems) {
      item.childItems.forEach((element) => {
        if (element.childItems) {
          this._selectChildNodes(element);
        }
        const idx = this._findIndexInSelection(element);
        if (idx === -1) {
          if (!this.selection) {
            this.selection = [];
          }
          this.selection.push(element);
        }
      });
    }
  }

  _deselectNode(item: NpTreeViewItem) {
    if (this._isSingleSelectionMode()) {
      this.selection = [];
    } else {
      const idx = this._findIndexInSelection(item);
      if (idx > -1) {
        this.selection.splice(idx, 1);
      }
      this._deselectChildNodes(item);
    }
    this.selectionChange.emit(this.selection);
  }

  _deselectChildNodes(item: NpTreeViewItem) {
    if (item.childItems) {
      item.childItems.forEach((element) => {
        if (element.childItems) {
          this._deselectChildNodes(element);
        }
        const idx = this._findIndexInSelection(element);
        if (idx > -1) {
          this.selection.splice(idx, 1);
        }
      });
    }
  }

  _isSelected(item: NpTreeViewItem) {
    return this._findIndexInSelection(item) > -1;
  }

  _findIndexInSelection(item: NpTreeViewItem) {
    let index = -1;
    if (this.selectionMode && this.selection) {
      for (let i = 0; i < this.selection.length; i++) {
        const selectedItem = this.selection[i];
        if (selectedItem.id === item.id) {
          index = i;
          break;
        }
      }
    }
    return index;
  }

  _isSingleSelectionMode() {
    return this.selectionMode && this.selectionMode === "single";
  }

  _syncSelectionForAll() {
    this.items.forEach((element) => {
      this._syncSelection(element);
    });
  }

  _syncSelection(item: NpTreeViewItem) {
    if (!item.id) {
      throw new Error("NpTreeViewItem.id must be defined for selection");
    }
    if (item.childItems && item.childItems.length) {
      for (const child of item.childItems) {
        this._syncSelection(child);
      }

      let selectedCount = 0;
      let childPartiallySelected = false;
      for (const child of item.childItems) {
        if (this._isSelected(child)) {
          selectedCount++;
        }
        if (child.partiallySelected) {
          childPartiallySelected = true;
        }
      }
      if (
        (childPartiallySelected || selectedCount > 0) &&
        selectedCount !== item.childItems.length
      ) {
        item.partiallySelected = true;
      } else {
        item.partiallySelected = false;
      }

      if (!this._isSingleSelectionMode()) {
        const idx = this._findIndexInSelection(item);
        if (selectedCount === item.childItems.length) {
          if (idx === -1) {
            if (!this.selection) {
              this.selection = [];
            }
            this.selection.push(item);
          }
        } else {
          if (idx > -1) {
            this.selection.splice(idx, 1);
          }
        }
      }
    }
  }

  _selectAll(item: NpTreeViewItem) {
    if (!item.id) {
      throw new Error("NpTreeViewItem.id must be defined for selection");
    }
    this.selection.push(item);
    if (item.childItems) {
      item.childItems.forEach((element) => {
        this._selectAll(element);
      });
    }
  }

  _trackBy(index: number): number {
    return index;
  }
}
