import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpListComponent } from './np-list.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';

@NgModule({
  declarations: [NpListComponent],
  imports: [
    CommonModule,
    NpUtilityModule
  ],
  exports: [NpListComponent]
})
export class NpListModule { }
