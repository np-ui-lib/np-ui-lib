import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpDropdownDemoRoutingModule } from './np-dropdown-demo-routing.module';
import { NpDropdownDemoComponent } from './np-dropdown-demo.component';
import { NpDropdownModule } from 'np-ui-lib';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpDropdownDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpDropdownDemoRoutingModule,
    NpDropdownModule
  ]
})
export class NpDropdownDemoModule { }
