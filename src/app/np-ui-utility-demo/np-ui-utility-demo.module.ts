import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiUtilityDemoRoutingModule } from './np-ui-utility-demo-routing.module';
import { NpUiUtilityDemoComponent } from './np-ui-utility-demo.component';
import { NpUiUtility, NpUiHightLightPipe } from 'projects/np-ui-lib/src/public-api';


@NgModule({
  declarations: [NpUiUtilityDemoComponent],
  imports: [
    CommonModule,
    NpUiUtilityDemoRoutingModule,
    NpUiUtility
  ],
  providers: [NpUiHightLightPipe]
})
export class NpUiUtilityDemoModule { }
