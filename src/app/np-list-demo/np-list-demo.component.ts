import { Component, OnInit, ViewChild } from '@angular/core';
import { NpListComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-list-demo',
  templateUrl: './np-list-demo.component.html'
})
export class NpListDemoComponent implements OnInit {

  constructor() { }

  importText = 'import { NpListModule } from \'np-ui-lib\';';
  htmlText = `<np-list [items]="items" [itemTemplate]="listTemplate">
</np-list>

<ng-template let-item="item" #listTemplate>
  Name: {{item.name}},<br> Age: {{item.age}}
</ng-template>`;

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

  ngOnInit(): void {
  }

  getSelectedItems() {
    alert(JSON.stringify(this.list2.getSelectedItems()));
  }

  setSelectedItems() {
    this.list2.setSelectedItems([
      { id: 1, name: 'Maria', age: 28 },
      { id: 2, name: 'Karl', age: 6 },
      { id: 3, name: 'Jose', age: 41 }]);
  }

  clear() {
    this.list2.clear();
  }

  selectAll() {
    this.list2.selectAll();
  }

  selectItem() {
    this.list2.selectItem({ id: 1, name: 'Maria', age: 28 });
  }

  selectItemByIndex() {
    this.list2.selectItemByIndex(0);
  }

  deselectItem() {
    this.list2.deselectItem({ id: 1, name: 'Maria', age: 28 });
  }

  deselectItemByIndex() {
    this.list2.deselectItemByIndex(0);
  }
}
