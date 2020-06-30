import { Component, Input, Output, EventEmitter, TemplateRef, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'np-virtual-scroll',
  templateUrl: './np-virtual-scroll.component.html',
  styleUrls: ['./np-virtual-scroll.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpVirtualScrollComponent {

  @Input() data: any[];
  @Input() pageSize: number;
  @Input() itemHeight: number;
  @Input() template: TemplateRef<any>;
  @Input() styleClass: string;
  static controlCount = 1;
  @Input() inputId: string = `np-virtualscroll_${NpVirtualScrollComponent.controlCount++}`;

  @Output() loadData: EventEmitter<any> = new EventEmitter();

  loadedPages: number[] = [];

  constructor() { }

  _onScrollIndexChange(index: number) {
    let pageRange = this._createPageRange(Math.floor(index / this.pageSize));
    pageRange.forEach(page => this.loadPage(page));
  }

  private _createPageRange(page: number) {
    let range: number[] = [];

    if (page !== 0) {
      range.push(page - 1);
    }
    range.push(page);
    if (page !== (Math.ceil(this.data.length / this.pageSize) - 1)) {
      range.push(page + 1);
    }

    return range;
  }

  loadPage(page: number) {
    if (!this.loadedPages.includes(page)) {
      this.loadData.emit({ first: this.pageSize * page, rows: this.pageSize });
      this.loadedPages.push(page);
      console.log({ first: this.pageSize * page, rows: this.pageSize });
    }
  }
}
