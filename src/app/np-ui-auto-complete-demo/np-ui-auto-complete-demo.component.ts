import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-np-ui-auto-complete-demo',
  templateUrl: './np-ui-auto-complete-demo.component.html',
  styleUrls: ['./np-ui-auto-complete-demo.component.css']
})
export class NpUiAutoCompleteDemoComponent implements OnInit {

  data: string[] = ['nilav', 'nil', 'nilav1', 'brijesh', 'brij', 'hardik', 'hard', 'hemal', 'hem'];
  dataFull: any[] = [
    { name: "nilav", id: 1, age: 28 },
    { name: "nil", id: 2, age: 54 },
    { name: "nilav1", id: 3, age: 45 },
    { name: "brijesh", id: 4, age: 52 },
    { name: "brij", id: 5, age: 15 },
    { name: "hardik", id: 6, age: 46 },
    { name: "hard", id: 7, age: 23 },
    { name: "hemal", id: 8, age: 22 },
    { name: "hem", id: 9, age: 50 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  auto1: string = "nilav";
  searchResult1: BehaviorSubject<string[]> = new BehaviorSubject(null);
  onSearch1(keyword: string) {
    setTimeout(() => {
      console.log("Call for Search1");
      var searchData = this.data.filter(function (element) { if (element.indexOf(keyword) > -1) { return element; } });
      this.searchResult1.next(searchData);
    }, 1000);
  }

  auto2: string = "nilav";
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

  auto8: any = { name: "nilav", id: 1, age: 28 };
  searchResult8: BehaviorSubject<any[]> = new BehaviorSubject(null);
  onSearch8(keyword: string) {
    setTimeout(() => {
      var searchData = this.dataFull.filter(function (element) { if (element["name"].indexOf(keyword) > -1) { return element; } });
      this.searchResult8.next(searchData);
    }, 1000);
  }
  @ViewChild("optionTemplateRef", { static: true }) optionTemplateRef: TemplateRef<any>;

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
