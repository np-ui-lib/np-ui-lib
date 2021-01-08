import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpInputTextComponent } from './np-input-text.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';

@NgModule({
  declarations: [NpInputTextComponent],
  imports: [CommonModule, NpUtilityModule],
  exports: [NpInputTextComponent]
})
export class NpInputTextModule { }
