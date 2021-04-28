import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  TemplateRef,
  Output,
  EventEmitter,
  ViewChild,
  SimpleChanges,
} from "@angular/core";
import { NpPaginatorComponent } from "../np-paginator/np-paginator.component";
import { NpUtilityService } from "../np-utility/np-utility.service";

@Component({
  selector: "np-list",
  templateUrl: "./np-list.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpListComponent {
  private static controlCount = 1;

  @Input() header: string;
  @Input() items: any[];
  @Input() itemTemplate: TemplateRef<any>;
  /* Selection mode can be single or multiple */
  @Input() selectionMode: string;
  @Input() valueKey: string;
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
  @Input() selection: any[];
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  @Output() onDeselect: EventEmitter<any> = new EventEmitter();
  @Output() onPageChange: EventEmitter<any> = new EventEmitter();

  @ViewChild("listPaginator") listPaginator: NpPaginatorComponent;

  constructor(private utility: NpUtilityService) {}

  selectAll() {
    if (this._isSingleSelectionMode()) {
      return;
    }
    const items = [];
    this.items.forEach((element) => {
      if (this.valueKey) {
        items.push(element[this.valueKey]);
      } else {
        items.push(element);
      }
    });
    this.selection = items;
    this.selectionChange.emit(this.selection);
  }

  deselectAll() {
    this.selection = [];
    this.selectionChange.emit(this.selection);
  }

  refresh() {
    this.listPaginator.refresh();
  }

  loadPage(page: number) {
    this.listPaginator.loadPage(page);
  }

  _onSelectItem(checked: any, item: any) {
    if (checked) {
      if (this.valueKey) {
        if (this._isSingleSelectionMode()) {
          this.selection = [item[this.valueKey]];
        } else {
          this.selection.push(item[this.valueKey]);
        }
        this.onSelect.emit(item[this.valueKey]);
      } else {
        if (this._isSingleSelectionMode()) {
          this.selection = [item];
        } else {
          this.selection.push(item);
        }
        this.onSelect.emit(item);
      }
    } else {
      const idx = this.selection.indexOf(item);
      this.selection.splice(idx, 1);
      this.onDeselect.emit(item);
    }
    this.selectionChange.emit(this.selection);
  }

  _isSelected(item) {
    return this.selectionMode && this._getSelectedIndexOfItem(item) > -1;
  }

  _getSelectedIndexOfItem(item: any) {
    const that = this;
    if (this.valueKey) {
      return this.selection.findIndex((element) => {
        if (element === item[this.valueKey]) {
          return item;
        }
      });
    }
    return this.selection.findIndex((element) => {
      if (that.utility.isEqual(element, item)) {
        return item;
      }
    });
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

  _isSingleSelectionMode() {
    return this.selectionMode && this.selectionMode === "single";
  }
}
