import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiTabsDemoRoutingModule } from './np-ui-tabs-demo-routing.module';
import { NpUiTabsDemoComponent } from './np-ui-tabs-demo.component';
import { NpUiTabsModule } from 'np-ui-lib';


@NgModule({
  declarations: [NpUiTabsDemoComponent],
  imports: [
    CommonModule,
    NpUiTabsDemoRoutingModule,
    NpUiTabsModule
  ]
})
export class NpUiTabsDemoModule { }
