import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpTreeViewDemoRoutingModule } from './np-tree-view-demo-routing.module';
import { NpTreeViewDemoComponent } from './np-tree-view-demo.component';
import { NpTreeViewModule } from 'np-ui-lib';


@NgModule({
  declarations: [NpTreeViewDemoComponent],
  imports: [
    CommonModule,
    NpTreeViewDemoRoutingModule,
    NpTreeViewModule
  ]
})
export class NpTreeViewDemoModule { }
