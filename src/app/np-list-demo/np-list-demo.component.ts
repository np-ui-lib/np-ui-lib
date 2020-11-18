import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NpListComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-list-demo',
  templateUrl: './np-list-demo.component.html'
})
export class NpListDemoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  importText = 'import { NpListModule } from \'np-ui-lib\';';
  htmlText = `<np-list [items]="items" [itemTemplate]="listTemplate">
</np-list>

<ng-template let-item="item" #listTemplate>
  Name: {{item.name}},<br> Age: {{item.age}}
</ng-template>`;

  serverSideHtmlText = `<np-list [items]="serverData" [showTiles]="true" [itemTemplate]="TileTemplate"
  [isServerOperations]="true" [totalItems]="serverDataCount" [pageSize]="10" (onPageChange)="onLoadData($event)">
</np-list>

<ng-template let-item="item" #TileTemplate>
  Name: {{item.ProductName}},<br> Unit price: {{item.UnitPrice}},<br> In stock: {{item.UnitsInStock}}
</ng-template>`;

  serverSideCtrlText = `onLoadData(options) {
  const skip = (options.currentPage - 1) * options.pageSize;
  const take = options.pageSize;
  this.http.get(url)
  .subscribe((data: any) => {
    if (data && data.value) {
      this.serverData = data.value;
      this.serverDataCount = data['@odata.count'];
    }
  });
}`;

  selection1 = [];
  selection2 = [];
  @ViewChild('list2', { static: true }) list2: NpListComponent;

  items: any[] = [
    { id: 1, name: 'Maria', age: 28 },
    { id: 2, name: 'Karl', age: 6 },
    { id: 3, name: 'Jose', age: 41 },
    { id: 4, name: 'Yoshi', age: 8 },
    { id: 5, name: 'Jonas', age: 9 },
    { id: 6, name: 'Hari', age: 18 },
    { id: 7, name: 'Karl', age: 33 },
    { id: 8, name: 'Daniel', age: 18 },
    { id: 9, name: 'Yvonne', age: 27 },
    { id: 10, name: 'John', age: 26 },
    { id: 11, name: 'Mario', age: 53 },
    { id: 12, name: 'Martine', age: 65 },
    { id: 13, name: 'Jean', age: 12 },
    { id: 14, name: 'Marie', age: 46 },
    { id: 15, name: 'Paula', age: 60 },
    { id: 16, name: 'Paul', age: 69 },
    { id: 17, name: 'Frédérique', age: 34 },
    { id: 18, name: 'Aria', age: 64 },
    { id: 19, name: 'Pedro', age: 31 },
    { id: 20, name: 'Janete', age: 36 },
    { id: 21, name: 'Maria', age: 28 },
    { id: 22, name: 'Karl', age: 6 },
    { id: 23, name: 'Jose', age: 41 },
    { id: 24, name: 'Yoshi', age: 8 },
    { id: 25, name: 'Jonas', age: 9 },
    { id: 26, name: 'Hari', age: 18 },
    { id: 27, name: 'Karl', age: 33 },
    { id: 28, name: 'Daniel', age: 18 },
    { id: 29, name: 'Yvonne', age: 27 },
    { id: 30, name: 'John', age: 26 },
    { id: 31, name: 'Mario', age: 53 },
    { id: 32, name: 'Martine', age: 65 },
    { id: 33, name: 'Jean', age: 12 },
    { id: 34, name: 'Marie', age: 46 },
    { id: 35, name: 'Paula', age: 60 },
    { id: 36, name: 'Paul', age: 69 },
    { id: 37, name: 'Frédérique', age: 34 },
    { id: 38, name: 'Aria', age: 64 },
    { id: 39, name: 'Pedro', age: 31 },
    { id: 40, name: 'Janete', age: 36 }
  ];
  tilesViewTotal2 = 0;
  tilesView2: any[];

  ngOnInit(): void {
  }

  getSelectedItems() {
    alert(JSON.stringify(this.selection1));
  }

  selectItems() {
    this.selection1 = [
      { id: 1, name: 'Maria', age: 28 },
      { id: 2, name: 'Karl', age: 6 },
      { id: 3, name: 'Jose', age: 41 }];
  }

  deselectAll() {
    this.list2.deselectAll();
  }

  selectAll() {
    this.list2.selectAll();
  }

  onClick($event) {
    alert($event.id);
  }

  onLoadData(options) {
    const skip = (options.currentPage - 1) * options.pageSize;
    const take = options.pageSize;
    this.http.get(`https://services.odata.org/V4/Northwind/Northwind.svc/Products?$top=${take}&$skip=${skip}&$count=true`)
      .subscribe((data: any) => {
        if (data && data.value) {
          this.tilesView2 = data.value;
          this.tilesViewTotal2 = data['@odata.count'];
        }
      });
  }
}
