import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpRichTextComponent } from './np-rich-text.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpRichTextComponent],
  imports: [
    CommonModule,
    NpUtilityModule,
    FormsModule,
    NpUtilityModule
  ],
  exports: [NpRichTextComponent]
})
export class NpRichTextModule { }
