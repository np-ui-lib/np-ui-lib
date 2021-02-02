import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-np-tags-demo',
  templateUrl: './np-tags-demo.component.html'
})
export class NpTagsDemoComponent implements OnInit {

  importText = 'import { NpTagsModule } from \'np-ui-lib\';';
  htmlText = `<np-tags [(ngModel)]="value" [searchResult]="items" [isServerSide]="true" (onSearch)="onSearchName($event)">
</np-tags>`;
  templateText = `<ng-template #itemTemplate let-item="item" let-keyword="keyword">
  <div [innerHTML]="item.name | npHighlight : keyword"></div>
</ng-template>`;
  onSearchText = `onSearchName(keyword: string) {
    ...Search data
    this.searchResult.next(searchData);
}`;

  data: string[] = ['Apple', 'Banana', 'Orange', 'Mango', 'Graps', 'Strawberry',
    'Watermelon', 'Kiwi', 'Blackberries', 'Blueberries', 'Cherries', 'Cranberries', 'Guava',
    'Java-Plum', 'Lychee', 'Papaya'];
  dataFull: any[] = [
    { id: 1, name: 'Apple', vitamin: 'A, B1, B6' },
    { id: 2, name: 'Banana', vitamin: 'A, B1, B6' },
    { id: 3, name: 'Orange', vitamin: 'C, Folate, Potassium' },
    { id: 4, name: 'Mango', vitamin: 'A, C' },
    { id: 5, name: 'Grapes', vitamin: 'C' },
    { id: 6, name: 'Strawberry', vitamin: 'iron, copper, B6' },
    { id: 7, name: 'Watermelon', vitamin: ' A, B6 and C' },
    { id: 8, name: 'Kiwi', vitamin: 'C, K , E' },
    { id: 9, name: 'Blackberries', vitamin: 'Folate, Magnesium, C' },
    { id: 10, name: 'Blueberries', vitamin: 'Folate, Magnesium, C' },
    { id: 11, name: 'Cherries', vitamin: 'A and folic acid' },
    { id: 12, name: 'Cranberries', vitamin: 'C, E, and K1' },
    { id: 13, name: 'Guava', vitamin: 'C' },
    { id: 14, name: 'Java-Plum', vitamin: 'A, K' },
    { id: 15, name: 'Lychee', vitamin: 'C, B' },
    { id: 16, name: 'Papaya', vitamin: 'C and fiber' }
  ];

  tags1: string[];
  tags2: any[] = [
    { id: 6, name: 'Strawberry', vitamin: 'iron, copper, B6' },
    { id: 7, name: 'Watermelon', vitamin: ' A, B6 and C' }];
  tags8: any[];
  tags3: string[];
  tags4: any[];
  tags5: any[] = [
    { id: 6, name: 'Strawberry', vitamin: 'iron, copper, B6' },
    { id: 7, name: 'Watermelon', vitamin: ' A, B6 and C' }];
  tags6: any[];
  tags7: any[];
  tags9: any[];

  searchResult1: BehaviorSubject<string[]> = new BehaviorSubject(null);
  searchResult2: BehaviorSubject<string[]> = new BehaviorSubject(this.dataFull);
  searchResult8: BehaviorSubject<string[]> = new BehaviorSubject(this.dataFull);
  searchResult3: BehaviorSubject<string[]> = new BehaviorSubject(null);
  searchResult4: BehaviorSubject<string[]> = new BehaviorSubject(this.dataFull);
  searchResult5: BehaviorSubject<string[]> = new BehaviorSubject(this.dataFull);
  searchResult6: BehaviorSubject<string[]> = new BehaviorSubject(this.dataFull);
  searchResult7: BehaviorSubject<string[]> = new BehaviorSubject(null);
  searchResult9: BehaviorSubject<string[]> = new BehaviorSubject(this.dataFull);

  onSearch1(keyword: string) {
    setTimeout(() => {
      const searchData = this.data.filter(element => {
        if (element.toLowerCase().indexOf(keyword.toLowerCase()) > -1) { return element; }
      });
      this.searchResult1.next(searchData);
    }, 1000);
  }

  onSearch3(keyword: string) {
    setTimeout(() => {
      const searchData = this.data.filter((element) => {
        if (element.toLowerCase().indexOf(keyword.toLowerCase()) > -1) { return element; }
      });
      this.searchResult3.next(searchData);
    }, 1000);
  }

  onSearch7(keyword: string) {
    setTimeout(() => {
      const searchData = this.dataFull.filter((element) => {
        if (element.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1) { return element; }
      });
      this.searchResult7.next(searchData);
    }, 1000);
  }

  constructor() { }

  ngOnInit(): void {
  }

  onChange9($event) {
    alert(JSON.stringify($event));
  }

  onCreateNewTag($event) {
    console.log(JSON.stringify($event));
  }
}
