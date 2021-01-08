import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpTextareaComponent } from './np-textarea.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';

@NgModule({
  declarations: [NpTextareaComponent],
  imports: [CommonModule, NpUtilityModule],
  exports: [NpTextareaComponent]
})
export class NpTextareaModule { }
