import { Component, OnInit, ViewChild } from '@angular/core';
import { NpTabsComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-tabs-demo',
  templateUrl: './np-tabs-demo.component.html',
  styleUrls: ['./np-tabs-demo.component.css']
})
export class NpTabsDemoComponent implements OnInit {

  @ViewChild("tabs", { static: true }) tabs: NpTabsComponent;
  @ViewChild("tabs2", { static: true }) tabs2: NpTabsComponent;

  count: number = 5;
  isTab4Visible: boolean = true;
  toggleTab3Disabled: boolean = true;

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
    alert(`tab changed to ${_tab.title}, is loading first time : ${_tab.isLoadingFirstTime}`);
  }

  changeCount() {
    this.count++;
  }

  toggleTab4() {
    this.isTab4Visible = !this.isTab4Visible;
  }

  ToggleTab3Disabled() {
    this.toggleTab3Disabled = !this.toggleTab3Disabled;
  }

}
