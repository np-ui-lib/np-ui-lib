import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpNumberBoxComponent } from './np-number-box.component';

@NgModule({
  declarations: [NpNumberBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [NpNumberBoxComponent]
})
export class NpNumberBoxModule { }
