import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpCardDemoRoutingModule } from './np-card-demo-routing.module';
import { NpCardDemoComponent } from './np-card-demo.component';
import { NpCardModule, NpTabsModule, NpAlertModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpCardDemoComponent],
  imports: [
    CommonModule,
    NpCardDemoRoutingModule,
    NpCardModule,
    NpTabsModule,
    NpAlertModule
  ]
})
export class NpCardDemoModule { }
