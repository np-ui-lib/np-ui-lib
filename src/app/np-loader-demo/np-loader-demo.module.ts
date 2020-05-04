import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpLoaderDemoRoutingModule } from './np-loader-demo-routing.module';
import { NpLoaderDemoComponent } from './np-loader-demo.component';
import { NpLoaderModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpLoaderDemoComponent],
  imports: [
    CommonModule,
    NpLoaderDemoRoutingModule,
    NpLoaderModule
  ]
})
export class NpLoaderDemoModule { }
