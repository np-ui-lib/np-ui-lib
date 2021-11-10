import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "np-paginator",
  templateUrl: "./np-paginator.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpPaginatorComponent implements OnInit, OnChanges {
  private static controlCount = 1;

  @Input() pageSize: number;
  @Input() totalItems: number;
  @Input() currentPage: number;
  @Input() showPageSize = true;
  @Input() showTotal = true;
  @Input() styleClass: string;
  @Input() inputId = `np-paginator-box_${NpPaginatorComponent.controlCount++}`;

  @Output() onPageChange: EventEmitter<any> = new EventEmitter();
  @Output() onPageSizeChange: EventEmitter<any> = new EventEmitter();
  @Output() onRefresh: EventEmitter<any> = new EventEmitter();

  totalPages: number;
  startIndex: number;
  endIndex: number;
  inited = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.totalItems) {
      this.totalPages = this._calculateTotalPages();
      this._setStartEndIndex();
      if (this.currentPage > this.totalPages) {
        this._applyChanges();
      }
      return;
    }
    if (changes && (changes.currentPage || changes.pageSize)) {
      this._applyChanges();
    }
  }

  ngOnInit(): void {
    if (!this.pageSize) {
      this.pageSize = 10;
    }
    if (!this.totalItems) {
      this.totalItems = 0;
    }
    if (!this.currentPage) {
      this.currentPage = 1;
    }
    this.inited = true;
    this._applyChanges();
  }

  loadPage(page: number) {
    this._loadPage(page);
  }

  refresh() {
    this.onRefresh.emit();
    this.onPageChange.emit({
      currentPage: this.currentPage,
      pageSize: this.pageSize,
    });
  }

  _onCurrentPageChange(event) {
    this._loadPage(Number(event.target.value));
  }

  _onItemPerPageChange(event) {
    this.onPageSizeChange.emit(event.target.value);
    this.pageSize = Number(event.target.value);
    this._loadPage(1);
  }

  _loadPage(page: number) {
    this.currentPage = page;
    this._applyChanges();
  }

  _applyChanges() {
    if (this.inited) {
      this.totalPages = this._calculateTotalPages();
    }
    if (this.currentPage > 0 && this.pageSize > 0 && this.totalPages > 0) {
      if (this.currentPage < 1) {
        this.currentPage = 1;
      }
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
      this.onPageChange.emit({
        currentPage: this.currentPage,
        pageSize: this.pageSize,
      });
      this._setStartEndIndex();
    }
  }

  private _calculateTotalPages(): number {
    const result =
      this.pageSize < 1 ? 1 : Math.ceil(this.totalItems / this.pageSize);
    return Math.max(result || 0, 1);
  }

  private _setStartEndIndex() {
    if (this.totalItems === 0) {
      this.startIndex = -1;
      this.endIndex = -1;
      return;
    }
    this.startIndex = (this.currentPage - 1) * this.pageSize;
    this.endIndex = Math.min(
      this.startIndex + this.pageSize - 1,
      this.totalItems - 1
    );
  }
}
