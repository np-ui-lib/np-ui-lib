import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpTabsComponent } from './np-tabs.component';
import { NpTabComponent } from './np-tab.component';
import { NpLoaderModule } from '../np-loader/np-loader.module';

@NgModule({
  declarations: [NpTabsComponent, NpTabComponent],
  imports: [
    CommonModule,
    NpLoaderModule
  ],
  exports: [NpTabsComponent, NpTabComponent]
})
export class NpTabsModule { }
