import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpTabsDemoRoutingModule } from './np-tabs-demo-routing.module';
import { NpTabsDemoComponent } from './np-tabs-demo.component';
import { NpTabsModule, NpCardModule } from 'np-ui-lib';


@NgModule({
  declarations: [NpTabsDemoComponent],
  imports: [
    CommonModule,
    NpTabsDemoRoutingModule,
    NpTabsModule,
    NpCardModule
  ]
})
export class NpTabsDemoModule { }
