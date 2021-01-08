import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpVirtualScrollComponent } from './np-virtual-scroll.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [NpVirtualScrollComponent],
  imports: [CommonModule, ScrollingModule],
  exports: [NpVirtualScrollComponent]
})
export class NpVirtualScrollModule { }
