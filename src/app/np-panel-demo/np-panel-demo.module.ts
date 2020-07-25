import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpPanelDemoRoutingModule } from './np-panel-demo-routing.module';
import { NpPanelDemoComponent } from './np-panel-demo.component';
import { NpPanelModule, NpCardModule, NpTabsModule } from 'np-ui-lib';


@NgModule({
  declarations: [NpPanelDemoComponent],
  imports: [
    CommonModule,
    NpPanelDemoRoutingModule,
    NpPanelModule,
    NpCardModule,
    NpTabsModule
  ]
})
export class NpPanelDemoModule { }
