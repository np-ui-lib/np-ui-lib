import { Component, OnInit, ViewChild } from '@angular/core';
import { NpVirtualScrollComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-virtual-scroll-demo',
  templateUrl: './np-virtual-scroll-demo.component.html'
})
export class NpVirtualScrollDemoComponent implements OnInit {

  importText = 'import { NpVirtualScrollModule } from \'np-ui-lib\';';
  htmlText = `<np-virtual-scroll [items]="data" [pageSize]="pageSize" [itemHeight]="50" [template]="itemTemplate" (loadData)="loadData($event)">
</np-virtual-scroll>

<ng-template #itemTemplate let-item="item">
  {{item}}
</ng-template>`;
  loadDataText = `this.allData = Array.from({ length: 1000 }).map((_, i) => "Item "+ (i+1));
this.data = Array.from<string>({ length: 1000 });

loadData(event) {
  setTimeout(() => {
    const fetchedData = this.allData.slice(event.first, (event.first + event.rows));
    Array.prototype.splice.apply(this.data, [...[event.first, event.rows], ...fetchedData]);
    this.data = [...this.data];
  }, 2000);
}`;

  pageSize: number;
  data: any[];
  allData: any[];

  @ViewChild('virtualScroll') virtualScroll: NpVirtualScrollComponent;

  constructor() {
    this.pageSize = 5;
    this.allData = Array.from({ length: 1000 }).map((_, i) => `Item #${i + 1}`);
    this.data = Array.from<string>({ length: 1000 });
  }

  ngOnInit(): void {

  }

  loadData(event) {
    setTimeout(() => {
      const fetchedData = this.allData.slice(event.first, (event.first + event.rows));

      Array.prototype.splice.apply(this.data, [...[event.first, event.rows], ...fetchedData]);

      this.data = [...this.data];
    }, 2000);
  }

  scrollTo11Item() {
    this.virtualScroll.scrollToIndex(10);
  }

  scrollOffsetDown() {
    this.virtualScroll.scrollToOffset(1000);
  }

  scrollOffsetUp() {
    this.virtualScroll.scrollToOffset(-1000);
  }

}
