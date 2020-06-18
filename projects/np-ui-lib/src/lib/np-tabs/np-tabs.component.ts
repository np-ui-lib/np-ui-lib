import { Component, ContentChildren, QueryList, AfterContentInit, ChangeDetectionStrategy, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { NpTabComponent } from './np-tab.component';

@Component({
  selector: 'np-tabs',
  templateUrl: './np-tabs.component.html',
  styleUrls: ['./np-tabs.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpTabsComponent implements AfterContentInit {

  @ContentChildren(NpTabComponent) _tabs: QueryList<NpTabComponent>;

  @Input() horizontalTabs: boolean;
  @Input() styleClass: string;
  @Output() onTabChange: EventEmitter<any> = new EventEmitter();
  static controlCount = 1;
  @Input() inputId: string = `np-tabs_${NpTabsComponent.controlCount++}`;

  _height: number;

  ngAfterContentInit() {
    // if default active and not disabled tab is present then select it.
    let activeTabs = this._tabs.filter((tab) => tab.active && tab.disabled != true);
    if (activeTabs.length === 0) {
      // if there is no default active tab, then take the first tab which is not disabled and make it active.
      var tabs = this._tabs.filter((tab) => tab.disabled != true);
      if (tabs) {
        this._tabs.toArray().forEach(tab => tab.active = false);
        tabs[0].active = true;
        this._height = tabs[0].height;
        this.onTabChange.emit(tabs[0]);
        tabs[0].isLoadingFirstTime = false;
      }
    } else {
      this._height = activeTabs[0].height;
      this.onTabChange.emit(activeTabs[0]);
      activeTabs[0].isLoadingFirstTime = false;
    }
  }

  _selectTab(tab: NpTabComponent) {
    if (tab.disabled == true || tab.active == true) {
      return;
    }
    this._tabs.toArray().forEach(_t => { if (_t.inputId != tab.inputId) { _t.active = false } });
    tab.active = true;
    this._height = tab.height;
    this.onTabChange.emit(tab);
    tab.isLoadingFirstTime = false;
  }

  selectTabById(id: string) {
    var tab = this._tabs.find(function (item) { if (item.inputId === id) { return true; } });
    if (tab && tab.disabled != true) {
      this._selectTab(tab);
    }
  }

  selectTabByIndex(idx: number) {
    var tab = this._tabs.toArray()[idx];
    if (tab && tab.disabled != true) {
      this._selectTab(tab);
    }
  }
}
