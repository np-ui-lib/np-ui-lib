import {
  Component, Input, Output, EventEmitter, TemplateRef, ViewEncapsulation,
  ChangeDetectionStrategy, ViewChild
} from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'np-virtual-scroll',
  templateUrl: './np-virtual-scroll.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpVirtualScrollComponent {

  private static controlCount = 1;

  @Input() header: string;
  @Input() items: any[];
  @Input() pageSize: number;
  @Input() itemHeight: number;
  @Input() template: TemplateRef<any>;
  @Input() styleClass: string;
  @Input() inputId = `np-virtualscroll_${NpVirtualScrollComponent.controlCount++}`;

  @Output() loadData: EventEmitter<any> = new EventEmitter();

  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;

  loadedPages: number[] = [];

  scrollToIndex(idx: number) {
    this.viewPort.scrollToIndex(idx);
  }

  scrollToOffset(offset: number) {
    this.viewPort.scrollToOffset(offset);
  }

  _onScrollIndexChange(index: number) {
    const pageRange = this._createPageRange(Math.floor(index / this.pageSize));
    pageRange.forEach(page => this._loadPage(page));
  }

  _loadPage(page: number) {
    if (this.loadedPages.indexOf(page) === -1) {
      this.loadData.emit({ first: this.pageSize * page, rows: this.pageSize });
      this.loadedPages.push(page);
    }
  }

  private _createPageRange(page: number) {
    const range: number[] = [];

    if (page !== 0) {
      range.push(page - 1);
    }
    range.push(page);
    if (page !== (Math.ceil(this.items.length / this.pageSize) - 1)) {
      range.push(page + 1);
    }

    return range;
  }
}
