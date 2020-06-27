import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpBlockuiDemoRoutingModule } from './np-blockui-demo-routing.module';
import { NpBlockuiDemoComponent } from './np-blockui-demo.component';
import { NpBlockUiModule, NpTabsModule, NpCardModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpBlockuiDemoComponent],
  imports: [
    CommonModule,
    NpBlockuiDemoRoutingModule,
    NpBlockUiModule,
    NpTabsModule,
    NpCardModule
  ]
})
export class NpBlockuiDemoModule { }
