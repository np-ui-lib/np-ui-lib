import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiDropdownDemoRoutingModule } from './np-ui-dropdown-demo-routing.module';
import { NpUiDropdownDemoComponent } from './np-ui-dropdown-demo.component';
import { NpUiDropdownModule } from 'np-ui-lib';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpUiDropdownDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUiDropdownDemoRoutingModule,
    NpUiDropdownModule
  ]
})
export class NpUiDropdownDemoModule { }
