import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpTreeViewDemoRoutingModule } from './np-tree-view-demo-routing.module';
import { NpTreeViewDemoComponent } from './np-tree-view-demo.component';
import { NpTreeViewModule, NpTabsModule, NpCardModule, NpSwitchModule } from 'np-ui-lib';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NpTreeViewDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpTreeViewDemoRoutingModule,
    NpTreeViewModule,
    NpTabsModule,
    NpCardModule,
    NpSwitchModule
  ]
})
export class NpTreeViewDemoModule { }
