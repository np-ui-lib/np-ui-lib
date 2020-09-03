import { Component, OnInit } from '@angular/core';
import { NpNotificationsService, NpNotification } from 'np-ui-lib';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-np-paginator-demo',
  templateUrl: './np-paginator-demo.component.html',
  styleUrls: ['./np-paginator-demo.component.css']
})
export class NpPaginatorDemoComponent implements OnInit {

  importText = 'import { NpPaginatorModule } from \'np-ui-lib\';';
  htmlText = `<np-paginator [pageSize]="pageSize" [totalItems]="total" [currentPage]="currentPage"
  (onPageChange)="onPageChange($event)">
</np-paginator>`;

  pageSize = 5;
  currentPage = 2;
  total = 50;

  total2 = 0;
  data2: any;

  constructor(private notificationsService: NpNotificationsService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onPageChange(event) {
    const msg = new NpNotification({ type: 'info', message: JSON.stringify(event) });
    this.notificationsService.show(msg);
  }

  changePageSize() {
    this.pageSize = 10;
  }

  changePageNumber() {
    this.currentPage = 3;
  }

  changeTotal() {
    this.total = 100;
  }

  SetTotalToZero() {
    this.total = 0;
  }

  onLoadData(options) {
    const skip = (options.currentPage - 1) * options.pageSize;
    const take = options.pageSize;
    this.http.get(`https://services.odata.org/V4/Northwind/Northwind.svc/Products?$top=${take}&$skip=${skip}&$count=true`)
      .subscribe((data: any) => {
        if (data && data.value) {
          this.data2 = data.value;
          this.total2 = data['@odata.count'];
        }
      });
  }
}
