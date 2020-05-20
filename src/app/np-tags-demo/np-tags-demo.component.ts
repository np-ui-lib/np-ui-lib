import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NpTreeViewItem } from 'np-ui-lib';

@Component({
  selector: 'app-np-tags-demo',
  templateUrl: './np-tags-demo.component.html',
  styleUrls: ['./np-tags-demo.component.css']
})
export class NpTagsDemoComponent implements OnInit {

  data: string[] = ["Apple", "Banana", "Orange", "Mango", "Graps", "Strawberry", "Watermelon", "Kiwi", "Blackberries", "Blueberries", "Cherries", "Cranberries", "Guava", "Java-Plum", "Lychee", "Papaya",];
  dataFull: any[] = [
    { name: "Apple", id: 1 },
    { name: "Banana", id: 2 },
    { name: "Orange", id: 3 },
    { name: "Mango", id: 4 },
    { name: "Graps", id: 5 },
    { name: "Strawberry", id: 6 },
    { name: "Watermelon", id: 7 },
    { name: "Kiwi", id: 8 },
    { name: "Blackberries", id: 9 },
    { name: "Blueberries", id: 10 },
    { name: "Cherries", id: 11 },
    { name: "Cranberries", id: 12 },
    { name: "Guava", id: 13 },
    { name: "Java-Plum", id: 14 },
    { name: "Lychee", id: 15 },
    { name: "Papaya", id: 16 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  tags1: string[];
  searchResult1: BehaviorSubject<string[]> = new BehaviorSubject(null);
  onSearch1(keyword: string) {
    setTimeout(() => {
      var searchData = this.data.filter(function (element) { if (element.toLowerCase().indexOf(keyword.toLowerCase()) > -1) { return element; } });
      this.searchResult1.next(searchData);
    }, 1000);
  }

  tags2: any[] = [{ name: "Apple", id: 1 }, { name: "Banana", id: 2 }];
  searchResult2: BehaviorSubject<string[]> = new BehaviorSubject(this.dataFull);

  tags3: string[];
  searchResult3: BehaviorSubject<string[]> = new BehaviorSubject(null);
  onSearch3(keyword: string) {
    setTimeout(() => {
      var searchData = this.data.filter(function (element) { if (element.toLowerCase().indexOf(keyword.toLowerCase()) > -1) { return element; } });
      this.searchResult3.next(searchData);
    }, 1000);
  }

  tags4: any[];
  searchResult4: BehaviorSubject<string[]> = new BehaviorSubject(this.dataFull);

  tags5: any[];
  searchResult5: BehaviorSubject<string[]> = new BehaviorSubject(this.dataFull);

  tags6: any[];
  treeViewItems: NpTreeViewItem[] = [
    new NpTreeViewItem({
      label: "Item 1",
      items: [
        new NpTreeViewItem({
          label: "Item 1.1", items: [
            new NpTreeViewItem({ label: "Item 1.1.1" }),
            new NpTreeViewItem({ label: "Item 1.1.2" }),
            new NpTreeViewItem({ label: "Item 1.1.3" }),
            new NpTreeViewItem({ label: "Item 1.1.4" }),
          ]
        }),
        new NpTreeViewItem({ label: "Item 1.2" }),
        new NpTreeViewItem({ label: "Item 1.3" }),
        new NpTreeViewItem({ label: "Item 1.4" }),
      ]
    }),
    new NpTreeViewItem({
      label: "Item 2",
      items: [
        new NpTreeViewItem({
          label: "Item 2.1", items: [
            new NpTreeViewItem({ label: "Item 2.1.1" }),
            new NpTreeViewItem({ label: "Item 2.1.2" }),
            new NpTreeViewItem({ label: "Item 2.1.3" }),
            new NpTreeViewItem({ label: "Item 2.1.4" }),
          ]
        }),
        new NpTreeViewItem({ label: "Item 2.2" }),
        new NpTreeViewItem({ label: "Item 2.3" }),
        new NpTreeViewItem({ label: "Item 2.4" }),
      ]
    }),
    new NpTreeViewItem({ label: "Item 3" }),
    new NpTreeViewItem({ label: "Item 4" }),
    new NpTreeViewItem({ label: "Item 5" }),
  ];
  searchResult6: BehaviorSubject<NpTreeViewItem[]> = new BehaviorSubject(this.treeViewItems);
}
