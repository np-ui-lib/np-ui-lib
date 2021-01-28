import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpTextareaComponent } from './np-textarea.component';
import { NpAutofocusModule } from '../np-utility/np-autofocus.module';

@NgModule({
  declarations: [NpTextareaComponent],
  imports: [CommonModule, NpAutofocusModule],
  exports: [NpTextareaComponent]
})
export class NpTextareaModule { }
