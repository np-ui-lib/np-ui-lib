import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-np-ui-auto-complete-demo',
  templateUrl: './np-ui-auto-complete-demo.component.html',
  styleUrls: ['./np-ui-auto-complete-demo.component.css']
})
export class NpUiAutoCompleteDemoComponent implements OnInit {

  data: string[] = ['nilav', 'nil', 'nilav1', 'brijesh', 'brij', 'hardik', 'hard', 'hemal', 'hem'];

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

}
