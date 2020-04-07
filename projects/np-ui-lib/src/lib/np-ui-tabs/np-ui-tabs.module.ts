import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpUiTabsComponent } from './np-ui-tabs.component';
import { NpUiTabComponent } from './np-ui-tab.component';

@NgModule({
  declarations: [NpUiTabsComponent, NpUiTabComponent],
  imports: [
    CommonModule
  ],
  exports: [NpUiTabsComponent, NpUiTabComponent]
})
export class NpUiTabsModule { }
