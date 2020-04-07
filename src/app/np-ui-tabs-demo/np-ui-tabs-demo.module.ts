import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiTabsDemoRoutingModule } from './np-ui-tabs-demo-routing.module';
import { NpUiTabsDemoComponent } from './np-ui-tabs-demo.component';
import { NpUiTabsModule } from 'projects/np-ui-lib/src/public-api';


@NgModule({
  declarations: [NpUiTabsDemoComponent],
  imports: [
    CommonModule,
    NpUiTabsDemoRoutingModule,
    NpUiTabsModule
  ]
})
export class NpUiTabsDemoModule { }
