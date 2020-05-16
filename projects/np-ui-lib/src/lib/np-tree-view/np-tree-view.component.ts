import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NpTreeViewItem } from './np-tree-view.model';

@Component({
  selector: 'np-tree-view',
  templateUrl: './np-tree-view.component.html',
  styleUrls: ['./np-tree-view.component.css']
})
export class NpTreeViewComponent implements OnInit {

  @Input() items: NpTreeViewItem[];
  @Input() styleClass: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  _toggleNode(item: NpTreeViewItem) {
    item._isVisible = !item._isVisible;
  }

  expandAll() {
    this.items.forEach(element => {
      this._setExapnd(element)
    });
  }

  collaseAll() {
    this.items.forEach(element => {
      this._setCollapse(element)
    });
  }

  _setExapnd(item: NpTreeViewItem) {
    item._isVisible = true;
    if (item.items) {
      item.items.forEach(element => {
        this._setExapnd(element)
      });
    }
  }

  _setCollapse(item: NpTreeViewItem) {
    item._isVisible = false;
    if (item.items) {
      item.items.forEach(element => {
        this._setCollapse(element)
      });
    }
  }

  _onClick(item: NpTreeViewItem) {
    this.onClick.emit(item);
  }

}
