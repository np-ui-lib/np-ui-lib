import { Component, OnInit, ViewChild } from '@angular/core';
import { NpUiTabsComponent } from 'projects/np-ui-lib/src/public-api';

@Component({
  selector: 'app-np-ui-tabs-demo',
  templateUrl: './np-ui-tabs-demo.component.html',
  styleUrls: ['./np-ui-tabs-demo.component.css']
})
export class NpUiTabsDemoComponent implements OnInit {

  @ViewChild("tabs", { static: true }) tabs: NpUiTabsComponent;
  @ViewChild("tabs2", { static: true }) tabs2: NpUiTabsComponent;

  count: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  loadTab4() {
    this.tabs.selectTabByIndex(3);
  }

  loadTabById() {
    this.tabs.selectTabById("tab2");

  }

  onTabChange(_tab) {
    alert("tab changed to " + _tab.title);
    if (_tab.id === "tab1") {
      this.tabs2.showLoader();
      setTimeout(() => {
        this.tabs2.hideLoader();
      }, 3000);
    }
  }

  changeCount() {
    this.count++;
  }

}
