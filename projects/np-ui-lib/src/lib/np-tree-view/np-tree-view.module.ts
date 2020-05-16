import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpTreeViewComponent } from './np-tree-view.component';

@NgModule({
  declarations: [NpTreeViewComponent],
  imports: [
    CommonModule
  ],
  exports: [NpTreeViewComponent]
})
export class NpTreeViewModule { }
