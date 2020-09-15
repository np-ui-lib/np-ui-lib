import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpPaginatorComponent } from './np-paginator.component';

@NgModule({
  declarations: [NpPaginatorComponent],
  imports: [
    CommonModule
  ],
  exports: [NpPaginatorComponent]
})
export class NpPaginatorModule { }
