import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpListComponent } from './np-list.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';
import { NpPaginatorModule } from '../np-paginator/np-paginator.module';

@NgModule({
  declarations: [NpListComponent],
  imports: [
    CommonModule,
    NpUtilityModule,
    NpPaginatorModule
  ],
  exports: [NpListComponent]
})
export class NpListModule { }
