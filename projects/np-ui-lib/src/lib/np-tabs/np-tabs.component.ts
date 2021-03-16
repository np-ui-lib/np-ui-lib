import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { ChangeDetectionStrategy, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { NpTabComponent } from './np-tab.component';

@Component({
  selector: 'np-tabs',
  templateUrl: './np-tabs.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpTabsComponent implements AfterContentInit {

  private static controlCount = 1;

  @Input() verticalTabs: boolean;
  @Input() height: number;
  @Input() stretchLabels: boolean;
  @Input() styleClass: string;
  @Input() inputId = `np-tabs_${NpTabsComponent.controlCount++}`;

  @Output() onTabChange: EventEmitter<any> = new EventEmitter();

  @ContentChildren(NpTabComponent) tabs: QueryList<NpTabComponent>;

  selected: NpTabComponent;

  ngAfterContentInit() {
    // if default active and not disabled tab is present then select it.
    const activeTabs = this.tabs.filter((tab) => tab.active && tab.disabled !== true);
    if (activeTabs.length === 0) {
      // if there is no default active tab, then take the first tab which is not disabled and make it active.
      const tabs = this.tabs.filter((tab) => tab.disabled !== true);
      if (tabs) {
        this.tabs.toArray().forEach(tab => tab.active = false);
        tabs[0].active = true;
        this.selected = tabs[0];
        this.onTabChange.emit(tabs[0]);
        tabs[0].isLoadFirstTime = false;
      }
    } else {
      this.selected = activeTabs[0];
      this.onTabChange.emit(activeTabs[0]);
      activeTabs[0].isLoadFirstTime = false;
    }
  }

  selectTabById(id: string) {
    const tab = this.tabs.find((item) => { if (item.inputId === id) { return true; } });
    if (tab && tab.disabled !== true) {
      this._selectTab(tab);
    }
  }

  selectTabByIndex(idx: number) {
    const tab = this.tabs.toArray()[idx];
    if (tab && tab.disabled !== true) {
      this._selectTab(tab);
    }
  }

  getSelectedTabIndex() {
    let selectedIndex = -1;
    this.tabs.toArray().findIndex((element, idx) => {
      if (element.active) {
        selectedIndex = idx;
      }
    });
    return selectedIndex;
  }

  getSelectedTab() {
    return this.selected;
  }

  _getTitleId(tab: NpTabComponent) {
    return tab.inputId + '_title';
  }

  _getBodyId(tab: NpTabComponent) {
    return tab.inputId + '_body';
  }

  _selectTab(tab: NpTabComponent) {
    if (tab.disabled === true || tab.active === true) {
      return;
    }
    this.tabs.toArray().forEach(element => { if (element.inputId !== tab.inputId) { element.active = false; } });
    tab.active = true;
    this.selected = tab;
    this.onTabChange.emit(tab);
    tab.isLoadFirstTime = false;
  }
}
