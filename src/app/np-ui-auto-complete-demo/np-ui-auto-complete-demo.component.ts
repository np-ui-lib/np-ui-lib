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
    { name: "nilav", id: 1 },
    { name: "nil", id: 2 },
    { name: "nilav1", id: 3 },
    { name: "brijesh", id: 4 },
    { name: "brij", id: 5 },
    { name: "hardik", id: 6 },
    { name: "hard", id: 7 },
    { name: "hemal", id: 8 },
    { name: "hem", id: 9 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  auto1: string;
  searchResult1: BehaviorSubject<string[]> = new BehaviorSubject(null);
  onSearch1(keyword: string) {
    setTimeout(() => {
      console.log("Call for Search1");
      var searchData = this.data.filter(function (element) { if (element.indexOf(keyword) > -1) { return element; } });
      this.searchResult1.next(searchData);
    }, 2000);
  }

  auto2: string;
  searchResult2: BehaviorSubject<string[]> = new BehaviorSubject(null);
  onSearch2(keyword: string) {
    setTimeout(() => {
      var searchData = this.data.filter(function (element) { if (element.indexOf(keyword) > -1) { return element; } });
      this.searchResult2.next(searchData);
    }, 2000);
  }

  auto3: string;
  searchResult3: BehaviorSubject<string[]> = new BehaviorSubject(null);
  onSearch3(keyword: string) {
    setTimeout(() => {
      var searchData = this.data.filter(function (element) { if (element.indexOf(keyword) > -1) { return element; } });
      this.searchResult3.next(searchData);
    }, 2000);
  }

  auto4: string;
  searchResult4: BehaviorSubject<string[]> = new BehaviorSubject(null);
  onSearch4(keyword: string) {
    setTimeout(() => {
      var searchData = this.data.filter(function (element) { if (element.indexOf(keyword) > -1) { return element; } });
      this.searchResult4.next(searchData);
    }, 2000);
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
    }, 2000);
  }

  auto6: string;
  searchResult6: BehaviorSubject<string[]> = new BehaviorSubject(null);
  onSearch6(keyword: string) {
    setTimeout(() => {
      var searchData = this.data.filter(function (element) { if (element.indexOf(keyword) > -1) { return element; } });
      this.searchResult6.next(searchData);
    }, 2000);
  }

  auto7: any;
  searchResult7: BehaviorSubject<any[]> = new BehaviorSubject(null);
  onSearch7(keyword: string) {
    setTimeout(() => {
      var searchData = this.dataFull.filter(function (element) { if (element["name"].indexOf(keyword) > -1) { return element; } });
      this.searchResult7.next(searchData);
    }, 2000);
  }

  auto8: any;
  searchResult8: BehaviorSubject<any[]> = new BehaviorSubject(null);
  onSearch8(keyword: string) {
    setTimeout(() => {
      var searchData = this.dataFull.filter(function (element) { if (element["name"].indexOf(keyword) > -1) { return element; } });
      this.searchResult8.next(searchData);
    }, 2000);
  }
  @ViewChild("optionTemplateRef", { static: true }) optionTemplateRef: TemplateRef<any>;

  auto9: any;
  searchResult9: BehaviorSubject<any[]> = new BehaviorSubject(null);
  onSearch9(keyword: string) {
    setTimeout(() => {
      var searchData = this.dataFull.filter(function (element) { if (element["name"].indexOf(keyword) > -1) { return element; } });
      this.searchResult9.next(searchData);
    }, 2000);
  }
}
