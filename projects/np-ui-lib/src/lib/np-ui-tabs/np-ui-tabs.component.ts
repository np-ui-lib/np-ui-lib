import { Component, ContentChildren, QueryList, AfterContentInit, ChangeDetectionStrategy, ViewEncapsulation, Output, EventEmitter, TemplateRef, Input } from '@angular/core';
import { NpUiTabComponent } from './np-ui-tab.component';

@Component({
  selector: 'np-ui-tabs',
  templateUrl: './np-ui-tabs.component.html',
  styleUrls: ['./np-ui-tabs.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpUiTabsComponent implements AfterContentInit {

  _isShowLoader: boolean = false;

  @ContentChildren(NpUiTabComponent) _tabs: QueryList<NpUiTabComponent>;

  @Output() onTabChange: EventEmitter<any> = new EventEmitter();

  @Input() styleClass: string;

  ngAfterContentInit() {
    // if default active and not disabled tab is present then select it.
    let activeTabs = this._tabs.filter((tab) => tab.active && tab.disabled != true);
    if (activeTabs.length === 0) {
      // if there is no default active tab, then take the first tab which is not disabled and make it active.
      var tabs = this._tabs.filter((tab) => tab.disabled != true);
      if (tabs) {
        this._tabs.toArray().forEach(tab => tab.active = false);
        tabs[0].active = true;
      }
    }
  }

  _selectTab(tab: NpUiTabComponent) {
    if (tab.disabled == true) {
      return;
    }
    this._tabs.toArray().forEach(_t => { if (_t.id != tab.id) { _t.active = false } });
    tab.active = true;
    if (this.onTabChange) {
      this.onTabChange.emit(tab);
    }
  }

  selectTabById(id: string) {
    var tab = this._tabs.find(function (item) { if (item.id === id) { return true; } });
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

  showLoader() {
    this._isShowLoader = true;
  }

  hideLoader() {
    this._isShowLoader = false;
  }

}
