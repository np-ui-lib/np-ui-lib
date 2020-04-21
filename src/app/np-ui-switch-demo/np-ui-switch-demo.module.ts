import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUiSwitchDemoRoutingModule } from './np-ui-switch-demo-routing.module';
import { NpUiSwitchDemoComponent } from './np-ui-switch-demo.component';
import { NpUiSwitchModule } from 'np-ui-lib';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NpUiSwitchDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUiSwitchDemoRoutingModule,
    NpUiSwitchModule
  ]
})
export class NpUiSwitchDemoModule { }
