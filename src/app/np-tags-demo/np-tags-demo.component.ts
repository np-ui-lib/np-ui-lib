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
    { id: 1, name: "Apple", vitamin: "A, B1, B6" },
    { id: 2, name: "Banana", vitamin: "A, B1, B6" },
    { id: 3, name: "Orange", vitamin: "C, Folate, Potassium" },
    { id: 4, name: "Mango", vitamin: "A, C" },
    { id: 5, name: "Grapes", vitamin: "C" },
    { id: 6, name: "Strawberry", vitamin: "iron, copper, B6" },
    { id: 7, name: "Watermelon", vitamin: " A, B6 and C" },
    { id: 8, name: "Kiwi", vitamin: "C, K , E" },
    { id: 9, name: "Blackberries", vitamin: "Folate, Magnesium, C" },
    { id: 10, name: "Blueberries", vitamin: "Folate, Magnesium, C" },
    { id: 11, name: "Cherries", vitamin: "A and folic acid" },
    { id: 12, name: "Cranberries", vitamin: "C, E, and K1" },
    { id: 13, name: "Guava", vitamin: "C" },
    { id: 14, name: "Java-Plum", vitamin: "A, K" },
    { id: 15, name: "Lychee", vitamin: "C, B" },
    { id: 16, name: "Papaya", vitamin: "C and fiber" }
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

  tags2: any[] = [{ id: 1, name: "Apple", vitamin: "A, B1, B6" },
  { id: 2, name: "Banana", vitamin: "A, B1, B6" }];
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

}
