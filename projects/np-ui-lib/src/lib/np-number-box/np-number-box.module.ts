import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpNumberBoxComponent } from './np-number-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpNumberBoxComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NpNumberBoxComponent]
})
export class NpNumberBoxModule { }
