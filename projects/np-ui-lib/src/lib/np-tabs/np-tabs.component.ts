import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from "@angular/core";
import {
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Output,
  EventEmitter,
  Input,
} from "@angular/core";
import { NpTabComponent } from "./np-tab.component";

@Component({
  selector: "np-tabs",
  templateUrl: "./np-tabs.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpTabsComponent implements AfterContentInit {
  private static controlCount = 1;

  @Input() verticalTabs: boolean;
  @Input() height: number;
  @Input() stretchLabels: boolean;
  @Input() styleClass: string;
  @Input() inputId: string = `np-tabs_${NpTabsComponent.controlCount++}`;

  @Output() onTabChange: EventEmitter<any> = new EventEmitter();

  @ContentChildren(NpTabComponent) tabs: QueryList<NpTabComponent>;

  selected: NpTabComponent;

  ngAfterContentInit() {
    // if default active and not disabled tab is present then select it.
    const activeTabs = this.tabs.filter(
      (tab) => tab.active && tab.disabled !== true
    );
    if (activeTabs.length === 0) {
      // if there is no default active tab, then take the first tab which is not disabled and make it active.
      const tabs = this.tabs.filter((tab) => tab.disabled !== true);
      if (tabs) {
        this.tabs.toArray().forEach((tab: NpTabComponent) => (tab.active = false));
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
    const tab = this.tabs.find((item) => item.inputId === id);
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
    return this.tabs.toArray().findIndex((element) => element.active);
  }

  getSelectedTab() {
    return this.selected;
  }

  _getTitleId(tab: NpTabComponent) {
    return tab.inputId + "_title";
  }

  _getBodyId(tab: NpTabComponent) {
    return tab.inputId + "_body";
  }

  _selectTab(tab: NpTabComponent) {
    if (tab.disabled === true || tab.active === true) {
      return;
    }
    this.tabs.toArray().forEach((element: NpTabComponent) => {
      if (element.inputId !== tab.inputId) {
        element.active = false;
      }
    });
    tab.active = true;
    this.selected = tab;
    this.onTabChange.emit(tab);
    tab.isLoadFirstTime = false;
  }
}
