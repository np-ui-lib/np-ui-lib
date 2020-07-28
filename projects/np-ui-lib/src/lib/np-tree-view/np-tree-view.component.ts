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
  @Input() inputId = `np-treeview_${NpTreeViewComponent.controlCount++}`;

  @Output() onClick: EventEmitter<any> = new EventEmitter();
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
    if (item.childItems) {
      item.childItems.forEach(element => {
        this._setExpand(element);
      });
    }
  }

  _setCollapse(item: NpTreeViewItem) {
    item.isExpanded = false;
    if (item.childItems) {
      item.childItems.forEach(element => {
        this._setCollapse(element);
      });
    }
  }

  _onClick(item: NpTreeViewItem) {
    this.onClick.emit(item);
  }
}
