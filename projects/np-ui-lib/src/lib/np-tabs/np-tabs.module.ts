import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpTabsComponent } from './np-tabs.component';
import { NpTabComponent } from './np-tab.component';

@NgModule({
  declarations: [NpTabsComponent, NpTabComponent],
  imports: [
    CommonModule
  ],
  exports: [NpTabsComponent, NpTabComponent]
})
export class NpTabsModule { }
