import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpCheckboxComponent } from './np-checkbox.component';
import { NpCheckboxGroupComponent } from './np-checkbox-group.component';
import { NpAutofocusModule } from '../np-utility/np-autofocus.module';

@NgModule({
  declarations: [NpCheckboxComponent, NpCheckboxGroupComponent],
  imports: [CommonModule, NpAutofocusModule],
  exports: [NpCheckboxComponent, NpCheckboxGroupComponent]
})
export class NpCheckboxModule { }
