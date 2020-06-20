import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpTreeViewComponent } from './np-tree-view.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';

@NgModule({
  declarations: [NpTreeViewComponent],
  imports: [
    CommonModule,
    NpUtilityModule
  ],
  exports: [NpTreeViewComponent]
})
export class NpTreeViewModule { }
