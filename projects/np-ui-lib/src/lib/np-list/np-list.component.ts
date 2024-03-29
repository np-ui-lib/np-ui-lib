import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  TemplateRef,
  Output,
  EventEmitter,
  ViewChild
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
  @Input() showTiles: boolean = false;
  @Input() columnSize: number = 4;
  @Input() isServerOperations: boolean = false;
  @Input() pageSize: number = 10;
  @Input() totalItems: number = 0;
  @Input() styleClass: string;
  @Input() inputId: string = `np-list_${NpListComponent.controlCount++}`;
  @Input() selection: any[];
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  @Output() onDeselect: EventEmitter<any> = new EventEmitter();
  @Output() onPageChange: EventEmitter<any> = new EventEmitter();

  @ViewChild("listPaginator") listPaginator: NpPaginatorComponent;

  constructor(private utility: NpUtilityService) { }

  selectAll(): void {
    if (this._isSingleSelectionMode()) {
      return;
    }
    const items = [];
    this.items.forEach((element: any) => {
      if (this.valueKey) {
        items.push(element[this.valueKey]);
      } else {
        items.push(element);
      }
    });
    this.selection = items;
    this.selectionChange.emit(this.selection);
  }

  deselectAll(): void {
    this.selection = [];
    this.selectionChange.emit(this.selection);
  }

  refresh(): void {
    this.listPaginator.refresh();
  }

  loadPage(page: number): void {
    this.listPaginator.loadPage(page);
  }

  _onSelectItem(checked: any, item: any): void {
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

  _isSelected(item: any): boolean {
    return this.selectionMode && this._getSelectedIndexOfItem(item) > -1;
  }

  _getSelectedIndexOfItem(item: any): any {
    const that = this;
    if (this.valueKey) {
      return this.selection.findIndex((element) => element === item[this.valueKey]);
    }
    return this.selection.findIndex((element) => that.utility.isEqual(element, item));
  }

  _trackBy(index: number): number {
    return index;
  }

  _onClick(item: any): void {
    this.onClick.emit(item);
  }

  _onPageChange(options: any): void {
    this.onPageChange.emit(options);
  }

  _isSingleSelectionMode(): boolean {
    return this.selectionMode && this.selectionMode === "single";
  }

  _clearSelection(): void {
    this.deselectAll();
  }
}
