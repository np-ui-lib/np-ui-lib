import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpCheckboxComponent } from './np-checkbox.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';
import { NpCheckboxGroupComponent } from './np-checkbox-group.component';

@NgModule({
  declarations: [NpCheckboxComponent, NpCheckboxGroupComponent],
  imports: [CommonModule, NpUtilityModule],
  exports: [NpCheckboxComponent, NpCheckboxGroupComponent]
})
export class NpCheckboxModule { }
