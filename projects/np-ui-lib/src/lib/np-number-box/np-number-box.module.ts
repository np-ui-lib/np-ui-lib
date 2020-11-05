import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpNumberBoxComponent } from './np-number-box.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';

@NgModule({
  declarations: [NpNumberBoxComponent],
  imports: [
    CommonModule,
    NpUtilityModule
  ],
  exports: [NpNumberBoxComponent]
})
export class NpNumberBoxModule { }
