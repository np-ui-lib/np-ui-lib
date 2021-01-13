import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpBadgeDemoRoutingModule } from './np-badge-demo-routing.module';
import { NpBadgeDemoComponent } from './np-badge-demo.component';
import { NpCardModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpBadgeDemoComponent],
  imports: [
    CommonModule,
    NpBadgeDemoRoutingModule,
    NpCardModule
  ]
})
export class NpBadgeDemoModule { }
