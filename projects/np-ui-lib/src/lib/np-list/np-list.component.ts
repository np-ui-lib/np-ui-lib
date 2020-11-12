import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, TemplateRef, Output, EventEmitter, ViewChild, SimpleChanges } from '@angular/core';
import { NpPaginatorComponent } from '../np-paginator/np-paginator.component';
import { NpUtilityService } from '../np-utility/np-utility.service';

@Component({
  selector: 'np-list',
  templateUrl: './np-list.component.html',
  styleUrls: ['./np-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpListComponent {
  static controlCount = 1;

  @Input() header: string;
  @Input() items: any[];
  @Input() itemTemplate: TemplateRef<any>;
  @Input() allowSelection = false;
  @Input() height: number;
  @Input() orderBy: string;
  @Input() orderDir: string;
  @Input() showTiles = false;
  @Input() columnSize = 4;
  @Input() isServerOperations = false;
  @Input() pageSize = 10;
  @Input() totalItems = 0;
  @Input() styleClass: string;
  @Input() inputId = `np-list_${NpListComponent.controlCount++}`;

  @ViewChild('listPaginator') listPaginator: NpPaginatorComponent;

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  @Output() onDeselect: EventEmitter<any> = new EventEmitter();
  @Output() onPageChange: EventEmitter<any> = new EventEmitter();

  selectedItems: any[] = [];

  constructor(private utility: NpUtilityService) { }

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
    return this.allowSelection && this._getSelectedIndexOfItem(item) > -1;
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

  selectItems(items: any[]) {
    this.selectedItems = items;
  }

  _trackBy(index: number): number {
    return index;
  }

  _onClick(item: any) {
    this.onClick.emit(item);
  }

  _onPageChange(options: any) {
    this.onPageChange.emit(options);
  }

  refresh() {
    this.listPaginator.refresh();
  }

  loadPage(page: number) {
    this.listPaginator.loadPage(page);
  }
}
