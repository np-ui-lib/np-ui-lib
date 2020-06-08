import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpListDemoRoutingModule } from './np-list-demo-routing.module';
import { NpListDemoComponent } from './np-list-demo.component';
import { NpListModule } from 'np-ui-lib';


@NgModule({
  declarations: [NpListDemoComponent],
  imports: [
    CommonModule,
    NpListDemoRoutingModule,
    NpListModule
  ]
})
export class NpListDemoModule { }
