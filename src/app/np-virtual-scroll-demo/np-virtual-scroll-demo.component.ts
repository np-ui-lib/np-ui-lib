import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-np-virtual-scroll-demo',
  templateUrl: './np-virtual-scroll-demo.component.html',
  styleUrls: ['./np-virtual-scroll-demo.component.css']
})
export class NpVirtualScrollDemoComponent implements OnInit {

  pageSize: number;
  data: any[];
  allData: any[];

  constructor() {
    this.pageSize = 50;
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

}
