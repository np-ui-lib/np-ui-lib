import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpToolbarDemoRoutingModule } from './np-toolbar-demo-routing.module';
import { NpToolbarDemoComponent } from './np-toolbar-demo.component';
import { NpCardModule } from 'np-ui-lib';

@NgModule({
  declarations: [NpToolbarDemoComponent],
  imports: [
    CommonModule,
    NpToolbarDemoRoutingModule,
    NpCardModule
  ]
})
export class NpToolbarDemoModule { }
