import { Component, OnInit, ViewChild } from '@angular/core';
import { NpTabsComponent } from 'np-ui-lib';

@Component({
  selector: 'app-np-tabs-demo',
  templateUrl: './np-tabs-demo.component.html',
  styleUrls: ['./np-tabs-demo.component.css']
})
export class NpTabsDemoComponent implements OnInit {

  importText = 'import { NpTabsModule } from \'np-ui-lib\';';
  htmlText = `<np-tabs>
  <np-tab title="Home">
  </np-tab>
  <np-tab title="Details">
  </np-tab>
  ...
</np-tabs>`;

  @ViewChild('tabs', { static: true }) tabs: NpTabsComponent;
  @ViewChild('tabs2', { static: true }) tabs2: NpTabsComponent;

  count = 5;
  isTab4Available = true;
  toggleTab3Disabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  loadTab4() {
    this.tabs.selectTabByIndex(3);
  }

  loadTabById() {
    this.tabs.selectTabById('tab2');

  }

  onTabChange(tab) {
    console.log(`tab changed to ${tab.title}, is load first time : ${tab.isLoadFirstTime}`);
  }

  changeCount() {
    this.count++;
  }

  toggleTab4() {
    this.isTab4Available = !this.isTab4Available;
  }

  ToggleTab3Disabled() {
    this.toggleTab3Disabled = !this.toggleTab3Disabled;
  }

}
