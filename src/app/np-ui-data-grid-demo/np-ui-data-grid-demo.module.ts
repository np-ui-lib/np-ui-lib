import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiDataGridDemoRoutingModule } from './np-ui-data-grid-demo-routing.module';
import { NpUiDataGridDemoComponent } from './np-ui-data-grid-demo.component';


@NgModule({
  declarations: [NpUiDataGridDemoComponent],
  imports: [
    CommonModule,
    NpUiDataGridDemoRoutingModule
  ]
})
export class NpUiDataGridDemoModule { }
