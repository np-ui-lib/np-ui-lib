import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpPaginatorComponent } from './np-paginator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpPaginatorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NpPaginatorComponent]
})
export class NpPaginatorModule { }
