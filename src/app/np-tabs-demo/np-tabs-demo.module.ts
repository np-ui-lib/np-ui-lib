import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpTabsDemoRoutingModule } from './np-tabs-demo-routing.module';
import { NpTabsDemoComponent } from './np-tabs-demo.component';
import { NpTabsModule } from 'np-ui-lib';


@NgModule({
  declarations: [NpTabsDemoComponent],
  imports: [
    CommonModule,
    NpTabsDemoRoutingModule,
    NpTabsModule
  ]
})
export class NpTabsDemoModule { }
