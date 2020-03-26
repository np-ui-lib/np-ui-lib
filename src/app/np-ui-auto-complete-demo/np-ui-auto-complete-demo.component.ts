import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-np-ui-auto-complete-demo',
  templateUrl: './np-ui-auto-complete-demo.component.html',
  styleUrls: ['./np-ui-auto-complete-demo.component.css']
})
export class NpUiAutoCompleteDemoComponent implements OnInit {

  auto1: string;
  searchResult: BehaviorSubject<string[]> = new BehaviorSubject(null);

  data: string[] = ['nilav', 'nil', 'nilav1', 'brijesh', 'brij', 'hardik', 'hard', 'hemal', 'hem'];

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(keyword: string) {
    setTimeout(() => {
      var searchData = this.data.filter(function (element) { if (element.indexOf(keyword) > -1) { return element; } });
      this.searchResult.next(searchData);
    }, 2000);
  }

}
