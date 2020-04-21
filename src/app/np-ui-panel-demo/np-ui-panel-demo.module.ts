import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiPanelDemoRoutingModule } from './np-ui-panel-demo-routing.module';
import { NpUiPanelDemoComponent } from './np-ui-panel-demo.component';
import { NpUiPanelModule } from 'np-ui-lib';


@NgModule({
  declarations: [NpUiPanelDemoComponent],
  imports: [
    CommonModule,
    NpUiPanelDemoRoutingModule,
    NpUiPanelModule
  ]
})
export class NpUiPanelDemoModule { }
