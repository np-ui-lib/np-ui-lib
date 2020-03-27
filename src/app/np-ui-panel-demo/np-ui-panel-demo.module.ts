import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiPanelDemoRoutingModule } from './np-ui-panel-demo-routing.module';
import { NpUiPanelDemoComponent } from './np-ui-panel-demo.component';
import { NpUiPanelModule } from 'projects/np-ui-lib/src/public-api';


@NgModule({
  declarations: [NpUiPanelDemoComponent],
  imports: [
    CommonModule,
    NpUiPanelDemoRoutingModule,
    NpUiPanelModule
  ]
})
export class NpUiPanelDemoModule { }
