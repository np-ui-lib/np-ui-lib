import { Component, OnInit, ViewChild } from '@angular/core';
import { NpUiTabsComponent } from 'projects/np-ui-lib/src/public-api';

@Component({
  selector: 'app-np-ui-tabs-demo',
  templateUrl: './np-ui-tabs-demo.component.html',
  styleUrls: ['./np-ui-tabs-demo.component.css']
})
export class NpUiTabsDemoComponent implements OnInit {

  @ViewChild("tabs", { static: true }) tabs: NpUiTabsComponent;

  tab2Title = "Tab2<span class='np-badge'>5</span>";

  constructor() { }

  ngOnInit(): void {
  }

  loadTab4() {
    this.tabs.selectTabByIndex(3);
  }

  onTabChange(tab) {
    alert("tab changed to "+ tab.title);
  }

}
