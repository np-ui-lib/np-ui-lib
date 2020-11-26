import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpListComponent } from './np-list.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';
import { NpPaginatorModule } from '../np-paginator/np-paginator.module';
import { NpCheckboxModule } from '../np-checkbox/np-checkbox.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpListComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUtilityModule,
    NpPaginatorModule,
    NpCheckboxModule
  ],
  exports: [NpListComponent]
})
export class NpListModule { }
