import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpInputTextDemoRoutingModule } from './np-input-text-demo-routing.module';
import { NpInputTextDemoComponent } from './np-input-text-demo.component';
import { FormsModule } from '@angular/forms';
import { NpInputTextModule, NpCardModule, NpTabsModule } from 'np-ui-lib';


@NgModule({
  declarations: [NpInputTextDemoComponent],
  imports: [
    CommonModule,
    NpInputTextDemoRoutingModule,
    FormsModule,
    NpInputTextModule,
    NpCardModule,
    NpTabsModule
  ]
})
export class NpInputTextDemoModule { }
