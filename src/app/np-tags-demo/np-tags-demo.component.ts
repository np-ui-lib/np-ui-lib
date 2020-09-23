import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NpTreeViewItem } from 'np-ui-lib';

@Component({
  selector: 'app-np-tags-demo',
  templateUrl: './np-tags-demo.component.html'
})
export class NpTagsDemoComponent implements OnInit {

  importText = 'import { NpTagsModule } from \'np-ui-lib\';';
  htmlText = `<np-tags [(ngModel)]="value" [searchResult]="items" [isServerSide]="true" (onSearch)="onSearchName($event)">
</np-tags>`;
  templateText = `<ng-template #itemTemplate let-item="item">
  <div>{{item.name}} ( {{item.vitamin}} )</div>
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
  treeViewItems: NpTreeViewItem[] = [
    new NpTreeViewItem({
      label: 'Item 1',
      id: 'Item 1',
      childItems: [
        new NpTreeViewItem({
          label: 'Item 1.1', id: 'Item 1.1', childItems: [
            new NpTreeViewItem({ label: 'Item 1.1.1', id: 'Item 1.1.1' }),
            new NpTreeViewItem({ label: 'Item 1.1.2', id: 'Item 1.1.2' }),
            new NpTreeViewItem({ label: 'Item 1.1.3', id: 'Item 1.1.3' }),
            new NpTreeViewItem({ label: 'Item 1.1.4', id: 'Item 1.1.4' }),
          ]
        }),
        new NpTreeViewItem({ label: 'Item 1.2', id: 'Item 1.2' }),
        new NpTreeViewItem({ label: 'Item 1.3', id: 'Item 1.3' }),
        new NpTreeViewItem({ label: 'Item 1.4', id: 'Item 1.4' }),
      ]
    }),
    new NpTreeViewItem({
      label: 'Item 2',
      id: 'Item 2',
      childItems: [
        new NpTreeViewItem({
          label: 'Item 2.1', id: 'Item 2.1', childItems: [
            new NpTreeViewItem({ label: 'Item 2.1.1', id: 'Item 2.1.1' }),
            new NpTreeViewItem({ label: 'Item 2.1.2', id: 'Item 2.1.2' }),
            new NpTreeViewItem({ label: 'Item 2.1.3', id: 'Item 2.1.3' }),
            new NpTreeViewItem({ label: 'Item 2.1.4', id: 'Item 2.1.4' }),
          ]
        }),
        new NpTreeViewItem({ label: 'Item 2.2', id: 'Item 2.2' }),
        new NpTreeViewItem({ label: 'Item 2.3', id: 'Item 2.3' }),
        new NpTreeViewItem({ label: 'Item 2.4', id: 'Item 2.4' }),
      ]
    }),
    new NpTreeViewItem({ label: 'Item 3', id: 'Item 3', childItems: [] }),
    new NpTreeViewItem({ label: 'Item 4', id: 'Item 4' }),
    new NpTreeViewItem({ label: 'Item 5', id: 'Item 5' }),
  ];

  tags1: string[];
  tags2: any[] = [
    { id: 6, name: 'Strawberry', vitamin: 'iron, copper, B6' },
    { id: 7, name: 'Watermelon', vitamin: ' A, B6 and C' }];
  tags3: string[];
  tags4: any[];
  tags6: any[];
  tags5: any[] = [
    { id: 6, name: 'Strawberry', vitamin: 'iron, copper, B6' },
    { id: 7, name: 'Watermelon', vitamin: ' A, B6 and C' }];
  tags7 = [{ label: 'Item 4', id: 'Item 4' }, { label: 'Item 1.1.1', id: 'Item 1.1.1' }];

  searchResult1: BehaviorSubject<string[]> = new BehaviorSubject(null);
  searchResult2: BehaviorSubject<string[]> = new BehaviorSubject(this.dataFull);
  searchResult3: BehaviorSubject<string[]> = new BehaviorSubject(null);
  searchResult4: BehaviorSubject<string[]> = new BehaviorSubject(this.dataFull);
  searchResult5: BehaviorSubject<string[]> = new BehaviorSubject(this.dataFull);
  searchResult6: BehaviorSubject<string[]> = new BehaviorSubject(this.dataFull);
  searchResult7: BehaviorSubject<NpTreeViewItem[]> = new BehaviorSubject(this.treeViewItems);

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

  constructor() { }

  ngOnInit(): void {
  }

}
