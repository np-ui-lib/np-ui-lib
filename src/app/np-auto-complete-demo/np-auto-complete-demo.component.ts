import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-np-auto-complete-demo',
  templateUrl: './np-auto-complete-demo.component.html',
  styleUrls: ['./np-auto-complete-demo.component.css']
})
export class NpAutoCompleteDemoComponent implements OnInit {

  data: string[] = ["Maria", "Ana", "Antonio", "Thomas", "Christina", "Hanna", "Frédérique", "Martín", "Laurence",
    "Elizabeth", "Victoria", "Patricio", "Francisco", "Yang", "Pedro", "Elizabeth", "Sven", "Janine", "Ann",
    "Roland", "Aria", "Diego", "Martine", "Peter", "Carine", "Paolo", "Lino", "Eduardo", "José",
    "André", "Howard", "Manuel", "Mario", "Carlos", "Yoshi", "Patricia", "Helen", "Philip", "Daniel", "Annette",
    "Yoshi", "John", "Renate", "Jaime", "Carlos", "Felipe", "Fran", "Giovanni", "Catherine", "Jean", "Alexander",
    "Simon", "Yvonne", "Rene", "Henriette", "Marie", "Guillermo", "Georg", "Isabel", "Bernardo", "Lúcia", "Horst",
    "Sergio", "Paula", "Maurizio", "Janete", "Michael", "Alejandra", "Jonas", "Jose", "Hari", "Jytte", "Dominique",
    "Art", "Pascale", "Liz", "Liu", "Karin", "Miguel", "Anabela", "Helvetius", "Palle", "Mary", "Paul", "Rita",
    "Pirkko", "Paula", "Karl", "Matti", "Zbyszek"
  ];
  dataFull: any[] = [
    { id: 1, name: "Maria", age: 28 },
    { id: 2, name: "Karl", age: 6 },
    { id: 3, name: "Jose", age: 41 },
    { id: 4, name: "Yoshi", age: 8 },
    { id: 5, name: "Jonas", age: 9 },
    { id: 6, name: "Hari", age: 18 },
    { id: 7, name: "Karl", age: 33 },
    { id: 8, name: "Daniel", age: 18 },
    { id: 9, name: "Yvonne", age: 27 },
    { id: 10, name: "John", age: 26 },
    { id: 11, name: "Mario", age: 53 },
    { id: 12, name: "Martine", age: 65 },
    { id: 13, name: "Jean", age: 12 },
    { id: 14, name: "Marie", age: 46 },
    { id: 15, name: "Paula", age: 60 },
    { id: 16, name: "Paul", age: 69 },
    { id: 17, name: "Frédérique", age: 34 },
    { id: 18, name: "Aria", age: 64 },
    { id: 19, name: "Pedro", age: 31 },
    { id: 20, name: "Janete", age: 36 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  auto1: string = "Maria";
  searchResult1: BehaviorSubject<string[]> = new BehaviorSubject(null);
  onSearch1(keyword: string) {
    setTimeout(() => {
      console.log("Call for Search1");
      var searchData = this.data.filter(function (element) { if (element.indexOf(keyword) > -1) { return element; } });
      this.searchResult1.next(searchData);
    }, 1000);
  }

  auto2: string = "Maria";
  searchResult2: BehaviorSubject<string[]> = new BehaviorSubject(null);
  onSearch2(keyword: string) {
    setTimeout(() => {
      var searchData = this.data.filter(function (element) { if (element.indexOf(keyword) > -1) { return element; } });
      this.searchResult2.next(searchData);
    }, 1000);
  }

  auto3: string;
  searchResult3: BehaviorSubject<string[]> = new BehaviorSubject(null);
  onSearch3(keyword: string) {
    setTimeout(() => {
      var searchData = this.data.filter(function (element) { if (element.indexOf(keyword) > -1) { return element; } });
      this.searchResult3.next(searchData);
    }, 1000);
  }

  auto4: string;
  searchResult4: BehaviorSubject<string[]> = new BehaviorSubject(null);
  onSearch4(keyword: string) {
    setTimeout(() => {
      var searchData = this.data.filter(function (element) { if (element.indexOf(keyword) > -1) { return element; } });
      this.searchResult4.next(searchData);
    }, 1000);
  }
  onChnage4(event) {
    alert(event);
  }

  auto5: string;
  searchResult5: BehaviorSubject<string[]> = new BehaviorSubject(null);
  onSearch5(keyword: string) {
    setTimeout(() => {
      var searchData = this.data.filter(function (element) { if (element.indexOf(keyword) > -1) { return element; } });
      this.searchResult5.next(searchData);
    }, 1000);
  }

  auto6: string;
  searchResult6: BehaviorSubject<string[]> = new BehaviorSubject(null);
  onSearch6(keyword: string) {
    setTimeout(() => {
      var searchData = this.data.filter(function (element) { if (element.indexOf(keyword) > -1) { return element; } });
      this.searchResult6.next(searchData);
    }, 1000);
  }

  auto7: any;
  searchResult7: BehaviorSubject<any[]> = new BehaviorSubject(null);
  onSearch7(keyword: string) {
    setTimeout(() => {
      var searchData = this.dataFull.filter(function (element) { if (element["name"].indexOf(keyword) > -1) { return element; } });
      this.searchResult7.next(searchData);
    }, 1000);
  }

  auto8: any = { name: "Maria", id: 1, age: 28 };
  searchResult8: BehaviorSubject<any[]> = new BehaviorSubject(null);
  onSearch8(keyword: string) {
    setTimeout(() => {
      var searchData = this.dataFull.filter(function (element) { if (element["name"].indexOf(keyword) > -1) { return element; } });
      this.searchResult8.next(searchData);
    }, 1000);
  }
  @ViewChild("itemTemplateRef", { static: true }) itemTemplateRef: TemplateRef<any>;

  auto9: any;
  searchResult9: BehaviorSubject<any[]> = new BehaviorSubject(null);
  onSearch9(keyword: string) {
    setTimeout(() => {
      var searchData = this.dataFull.filter(function (element) { if (element["name"].indexOf(keyword) > -1) { return element; } });
      this.searchResult9.next(searchData);
    }, 1000);
  }

  auto10: any;
  searchResult10: BehaviorSubject<any[]> = new BehaviorSubject(null);
  onSearch10(keyword: string) {
    setTimeout(() => {
      var searchData = this.dataFull.filter(function (element) { if (element["name"].indexOf(keyword) > -1) { return element; } });
      this.searchResult10.next(searchData);
    }, 1000);
  }

  auto11: any;
  searchResult11: BehaviorSubject<any[]> = new BehaviorSubject(null);
  onSearch11(keyword: string) {
    setTimeout(() => {
      var searchData = this.dataFull.filter(function (element) { if (element["name"].indexOf(keyword) > -1) { return element; } });
      this.searchResult11.next(searchData);
    }, 1000);
  }
}
