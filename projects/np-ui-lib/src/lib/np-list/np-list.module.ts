import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpListComponent } from './np-list.component';

@NgModule({
  declarations: [NpListComponent],
  imports: [
    CommonModule
  ],
  exports: [NpListComponent]
})
export class NpListModule { }
